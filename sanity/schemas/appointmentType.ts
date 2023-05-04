import { defineField, defineType } from 'sanity';

export default defineType({
  name: 'appointmentType',
  title: 'Appointment Type',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name (Internal-Facing)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'nickname',
      title: 'Name (Patient-Facing)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'id',
      title: 'ID',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'treatmentType',
      title: 'Treatment Type',
      type: 'string',
      description: 'Inferred from the appointment type name.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'Psychiatry', value: 'psychiatry' },
          { title: 'Therapy', value: 'therapy' },
        ],
      },
    }),
    defineField({
      name: 'patient',
      title: 'Patient',
      type: 'string',
      description: 'Inferred from the appointment type name.',
      validation: (Rule) => Rule.required(),
      options: {
        list: [
          { title: 'New', value: 'new' },
          { title: 'Existing', value: 'existing' },
        ],
      },
    }),
    // TODO figure out how to use refs instead of resetting this every time we sync data
    defineField({
      name: 'patientType',
      title: 'Patient Type',
      description: 'Inferred from the appointment type name.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isTelemedicine',
      title: 'Telemedicine?',
      type: 'boolean',
      initialValue: false,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'duration',
      title: 'Duration (minutes)',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
