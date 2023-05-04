import { defineField, defineType, SanityDocument } from 'sanity';

export default defineType({
  name: 'provider',
  title: 'Provider',
  type: 'document',
  groups: [
    {
      name: 'providerDetails',
      title: 'Provider Details',
    },
    {
      name: 'amdSettings',
      title: 'AMD Settings',
    },
  ],
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      group: 'providerDetails',
    }),
    defineField({
      name: 'lastName',
      title: 'Last Name',
      type: 'string',
      group: 'providerDetails',
    }),

    defineField({
      name: 'email',
      title: 'Work Email',
      type: 'string',
      validation: (Rule) =>
        Rule.regex(
          /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
          {
            name: 'email', // Error message is "Does not match email-pattern"
            invert: false, // Boolean to allow any value that does NOT match pattern
          },
        ),
      group: 'providerDetails',
    }),
    defineField({
      name: 'profilePicture',
      title: 'Profile Picture',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'providerDetails',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: (document: SanityDocument) =>
          `${document.firstName}-${document.lastName}`,
        maxLength: 96,
      },
      group: 'providerDetails',
    }),
    defineField({
      name: 'gender',
      title: 'Gender',
      type: 'reference',
      to: [{ type: 'gender' }],
      group: 'providerDetails',
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'reference',
      to: [{ type: 'pronouns' }],
      group: 'providerDetails',
    }),
    defineField({
      name: 'postnominalLetters',
      title: 'Postnominal Letters',
      type: 'string',
      group: 'providerDetails',
    }),

    defineField({
      name: 'biography',
      title: 'Biography',
      type: 'array',
      of: [
        {
          title: 'Block',
          type: 'block',
          styles: [{ title: 'Normal', value: 'normal' }],
          lists: [],
        },
      ],
      group: 'providerDetails',
    }),
    defineField({
      name: 'educations',
      title: 'Education',
      type: 'array',
      of: [{ type: 'education' }],
      group: 'providerDetails',
    }),
    defineField({
      name: 'hashtags',
      title: 'Hashtags',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'hashtag' }] }],
      group: 'providerDetails',
    }),
    defineField({
      name: 'languages',
      title: 'Languages',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'language' }] }],
      group: 'providerDetails',
    }),

    defineField({
      name: 'specialties',
      title: 'Specialties',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'specialty' }] }],
      group: 'providerDetails',
    }),

    defineField({
      name: 'location',
      title: 'Location',
      type: 'reference',
      to: [{ type: 'location' }],
      group: 'providerDetails',
    }),

    defineField({
      name: 'insurances',
      title: 'Insurances',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'insurance' }] }],
      group: 'providerDetails',
    }),
    // TODO use this to sort the providers, combine with promoteUntil
    defineField({
      name: 'totalPercentageAvailablePerMonth',
      title: 'Total Percentage Available Per Month',
      description:
        'Used to sort providers in search results by most availability',
      type: 'number',
      group: 'amdSettings',
    }),
    defineField({
      name: 'promoteUntil',
      title: 'Promote Until',
      description:
        'Promote this provider to the top of any search results they appear in until this date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      group: 'providerDetails',
    }),
    defineField({
      name: 'numNewPatientsPerWeek',
      title: 'Number of New Patients Allowed Per Week (THERAPY)',
      description:
        'Synced from the caseload settings. Specific whole weeks will be hidden from booking if this value is reached for that week. 0 means no new patients allowed. Empty means ignore this setting.',
      type: 'number',
      group: 'providerDetails',
    }),
    defineField({
      name: 'numNewPatientsPerDay',
      title: 'Number of New Patients Allowed Per Day (PSYCHIATRY)',
      description:
        'Not synced from anywhere. Specific whole days will be hidden from booking if this value is reached for that week. 0 means no new patients allowed. Empty means ignore this setting.',
      type: 'number',
      group: 'providerDetails',
    }),
    defineField({
      name: 'providerType',
      title: 'Provider Type (Profile Page)',
      type: 'reference',
      to: [{ type: 'providerType' }],
      group: 'providerDetails',
    }),
    defineField({
      name: 'allowSearch',
      title: 'Allow In Search?',
      type: 'boolean',
      group: 'providerDetails',
    }),
    defineField({
      name: 'allowProfile',
      title: 'Allow Profile Page?',
      type: 'boolean',
      group: 'providerDetails',
    }),
    // TODO Psychiatry vs Therapy can be inferred from the appointment types having "THER" or not
    // TODO Patient Type (adult, minor, couples, family, group) can be inferred from the appointment types
    defineField({
      name: 'allowedAppointmentTypes',
      title: 'Allowed Appointment Types',
      type: 'array',
      of: [{ type: 'appointmentType' }],
      group: 'amdSettings',
    }),
    defineField({
      name: 'officeCode',
      title: 'Office Code',
      type: 'string',
      options: {
        list: [
          { title: '133003', value: '133003' },
          { title: '138325', value: '138325' },
        ],
      },
      group: 'amdSettings',
    }),
    defineField({
      name: 'facilityId',
      title: 'FacilityId',
      type: 'string',
      options: {
        list: [
          { title: 'Arlington Heights', value: '179' },
          { title: 'Lakeview', value: '181' },
          { title: 'River North', value: '184' },
          { title: 'Loop', value: '186' },
          { title: 'Evanston (Suburbs Key)', value: '187' },
          { title: 'Evanston (City Key)', value: '188' },
          { title: 'Mokena', value: '189' },
        ],
      },
      group: 'amdSettings',
    }),
    defineField({
      name: 'profileId',
      title: 'ProfileId',
      type: 'number',
      group: 'amdSettings',
    }),
    defineField({
      name: 'columnId',
      title: 'ColumnId',
      type: 'number',
      group: 'amdSettings',
    }),
    defineField({
      name: 'workWeek',
      title: 'Work Week',
      type: 'string',
      group: 'amdSettings',
    }),
    defineField({
      name: 'start',
      title: 'Start Time',
      type: 'string',
      group: 'amdSettings',
    }),
    defineField({
      name: 'end',
      title: 'End Time',
      type: 'string',
      group: 'amdSettings',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      media: 'profilePicture',
    },
    prepare(selection) {
      const { firstName, lastName, media } = selection;
      return { media, title: firstName + ' ' + lastName };
    },
  },
});
