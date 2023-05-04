import anchorType from './anchorType';
import AppointmentType from './appointmentType';
import blockContent from './blockContent';
import card from './card';
import category from './category';
import Education from './education';
import faq from './faq';
import faqList from './faqList';
import formBuilder from './formBuilder';
import Gender from './gender';
import groupPage from './groupPage';
import Hashtag from './hashtag';
import insurance from './insurance';
import language from './language';
import Location from './location';
import menu from './menu';
import notificationType from './notification';
import PatientType from './patientType';
import post from './post';
import Pronouns from './pronouns';
import provider from './provider';
import ProviderType from './providerType';
import redirects from './redirects';
import seo from './seo';
import siteSettings from './siteSettings';
import Specialty from './specialty';
import Treatment from './treatmentArea';

export const schemaTypes = [
  post,
  provider,
  Treatment,
  formBuilder,
  Location,
  groupPage,
  redirects,
  //blocks
  faqList,
  card,

  // Types
  Education,
  category,
  blockContent,
  seo,
  Hashtag,
  language,
  insurance,
  Specialty,
  ProviderType,
  AppointmentType,
  Gender,
  Pronouns,
  PatientType,
  anchorType,
  faq,
  notificationType,
  siteSettings,
  menu,
];
