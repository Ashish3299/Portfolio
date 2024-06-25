// Code generated by Slice Machine. DO NOT EDIT.

import type * as prismic from "@prismicio/client";

type Simplify<T> = { [KeyType in keyof T]: T[KeyType] };

/**
 * Content for Experience documents
 */
interface ExperienceDocumentData {
  /**
   * Company Name field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.name
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  name: prismic.KeyTextField;

  /**
   * Start Date field in *Experience*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.startDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  startDate: prismic.DateField;

  /**
   * End Date field in *Experience*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.endDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  endDate: prismic.DateField;

  /**
   * Website field in *Experience*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.website
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  website: prismic.LinkToMediaField;

  /**
   * Working Role field in *Experience*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.role
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  role: prismic.KeyTextField;

  /**
   * Descr field in *Experience*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience.descr
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  descr: prismic.RichTextField;
}

/**
 * Experience document from Prismic
 *
 * - **API ID**: `experience`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ExperienceDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ExperienceDocumentData>,
    "experience",
    Lang
  >;

/**
 * Content for Footer documents
 */
interface FooterDocumentData {
  /**
   * Footer Note field in *Footer*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: footer.footerNote
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  footerNote: prismic.KeyTextField;
}

/**
 * Footer document from Prismic
 *
 * - **API ID**: `footer`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type FooterDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<FooterDocumentData>,
    "footer",
    Lang
  >;

/**
 * Item in *Header → Menu*
 */
export interface HeaderDocumentDataMenuItem {
  /**
   * Text field in *Header → Menu*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[].text
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  text: prismic.KeyTextField;

  /**
   * Link field in *Header → Menu*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[].link
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  link: prismic.LinkField;
}

/**
 * Content for Header documents
 */
interface HeaderDocumentData {
  /**
   * Logo field in *Header*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: header.logo
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  logo: prismic.ImageField<never>;

  /**
   * Menu field in *Header*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: header.menu[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  menu: prismic.GroupField<Simplify<HeaderDocumentDataMenuItem>>;

  /**
   * CTA Button Text field in *Header*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: header.CtaBtnText
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  CtaBtnText: prismic.KeyTextField;

  /**
   * CTA Button Link field in *Header*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: header.CtaBtnLink
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  CtaBtnLink: prismic.LinkField;
}

/**
 * Header document from Prismic
 *
 * - **API ID**: `header`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HeaderDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HeaderDocumentData>,
    "header",
    Lang
  >;

type HomepageDocumentDataSlicesSlice =
  | ProjectsSectionSlice
  | AboutSectionSlice
  | FeaturedProjectsSlice
  | ExperienceSectionSlice
  | ContactSectionSlice
  | IntroSectionSlice;

/**
 * Content for Homepage documents
 */
interface HomepageDocumentData {
  /**
   * Title field in *Homepage*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Homepage*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: homepage.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<HomepageDocumentDataSlicesSlice>;
}

/**
 * Homepage document from Prismic
 *
 * - **API ID**: `homepage`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type HomepageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<HomepageDocumentData>,
    "homepage",
    Lang
  >;

type PageDocumentDataSlicesSlice = never;

/**
 * Content for Page documents
 */
interface PageDocumentData {
  /**
   * Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: page.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Slice Zone field in *Page*
   *
   * - **Field Type**: Slice Zone
   * - **Placeholder**: *None*
   * - **API ID Path**: page.slices[]
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#slices
   */
  slices: prismic.SliceZone<PageDocumentDataSlicesSlice> /**
   * Meta Title field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A title of the page used for social media and search engines
   * - **API ID Path**: page.meta_title
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  meta_title: prismic.KeyTextField;

  /**
   * Meta Description field in *Page*
   *
   * - **Field Type**: Text
   * - **Placeholder**: A brief summary of the page
   * - **API ID Path**: page.meta_description
   * - **Tab**: SEO & Metadata
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  meta_description: prismic.KeyTextField;
}

/**
 * Page document from Prismic
 *
 * - **API ID**: `page`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type PageDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<Simplify<PageDocumentData>, "page", Lang>;

/**
 * Content for Project documents
 */
interface ProjectDocumentData {
  /**
   * Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.title
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  title: prismic.KeyTextField;

  /**
   * Description field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.description
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Featured Image field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.featuredImg
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  featuredImg: prismic.ImageField<never>;

  /**
   * Publish Date field in *Project*
   *
   * - **Field Type**: Date
   * - **Placeholder**: *None*
   * - **API ID Path**: project.publishDate
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#date
   */
  publishDate: prismic.DateField;

  /**
   * Github field in *Project*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: project.github
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github: prismic.LinkToMediaField;

  /**
   * URL field in *Project*
   *
   * - **Field Type**: Link to Media
   * - **Placeholder**: *None*
   * - **API ID Path**: project.url
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  url: prismic.LinkToMediaField;

  /**
   * Tech field in *Project*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.tech
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  tech: prismic.RichTextField /**
   * Meta Title field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.metaTitle
   * - **Tab**: SEO Fields
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */;
  metaTitle: prismic.KeyTextField;

  /**
   * Meta Description field in *Project*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: project.metaDescr
   * - **Tab**: SEO Fields
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  metaDescr: prismic.KeyTextField;

  /**
   * Thumbnail field in *Project*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: project.Thumbnail
   * - **Tab**: SEO Fields
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  Thumbnail: prismic.ImageField<never>;

  /**
   * Show field in *Project*
   *
   * - **Field Type**: Boolean
   * - **Placeholder**: *None*
   * - **Default Value**: true
   * - **API ID Path**: project.show
   * - **Tab**: SEO Fields
   * - **Documentation**: https://prismic.io/docs/field#boolean
   */
  show: prismic.BooleanField;
}

/**
 * Project document from Prismic
 *
 * - **API ID**: `project`
 * - **Repeatable**: `true`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type ProjectDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithUID<
    Simplify<ProjectDocumentData>,
    "project",
    Lang
  >;

/**
 * Content for Settings documents
 */
interface SettingsDocumentData {
  /**
   * Default Thumbnail field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.defaultThumbnail
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  defaultThumbnail: prismic.ImageField<never>;

  /**
   * Favicon field in *Settings*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.favicon
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  favicon: prismic.ImageField<never>;

  /**
   * Email field in *Settings*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.email
   * - **Tab**: Main
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  email: prismic.KeyTextField /**
   * Instagram field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.instagram
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */;
  instagram: prismic.LinkField;

  /**
   * Github field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.github
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  github: prismic.LinkField;

  /**
   * Twitter field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.twitter
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  twitter: prismic.LinkField;

  /**
   * Linkedin field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.linkedin
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  linkedin: prismic.LinkField;

  /**
   * Codepen field in *Settings*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: settings.codepen
   * - **Tab**: Social
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  codepen: prismic.LinkField;
}

/**
 * Settings document from Prismic
 *
 * - **API ID**: `settings`
 * - **Repeatable**: `false`
 * - **Documentation**: https://prismic.io/docs/custom-types
 *
 * @typeParam Lang - Language API ID of the document.
 */
export type SettingsDocument<Lang extends string = string> =
  prismic.PrismicDocumentWithoutUID<
    Simplify<SettingsDocumentData>,
    "settings",
    Lang
  >;

export type AllDocumentTypes =
  | ExperienceDocument
  | FooterDocument
  | HeaderDocument
  | HomepageDocument
  | PageDocument
  | ProjectDocument
  | SettingsDocument;

/**
 * Item in *AboutSection → Default → Primary → Technologies*
 */
export interface AboutSectionSliceDefaultPrimaryTechnologiesItem {
  /**
   * Tech field in *AboutSection → Default → Primary → Technologies*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.technologies[].tech
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  tech: prismic.KeyTextField;
}

/**
 * Primary content in *AboutSection → Default → Primary*
 */
export interface AboutSectionSliceDefaultPrimary {
  /**
   * Heading field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * Technologies field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.technologies[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  technologies: prismic.GroupField<
    Simplify<AboutSectionSliceDefaultPrimaryTechnologiesItem>
  >;

  /**
   * Image field in *AboutSection → Default → Primary*
   *
   * - **Field Type**: Image
   * - **Placeholder**: *None*
   * - **API ID Path**: about_section.default.primary.image
   * - **Documentation**: https://prismic.io/docs/field#image
   */
  image: prismic.ImageField<never>;
}

/**
 * Default variation for AboutSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<AboutSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *AboutSection*
 */
type AboutSectionSliceVariation = AboutSectionSliceDefault;

/**
 * AboutSection Shared Slice
 *
 * - **API ID**: `about_section`
 * - **Description**: AboutSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type AboutSectionSlice = prismic.SharedSlice<
  "about_section",
  AboutSectionSliceVariation
>;

/**
 * Primary content in *ContactSection → Default → Primary*
 */
export interface ContactSectionSliceDefaultPrimary {
  /**
   * Sub Heading field in *ContactSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.default.primary.subHeading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subHeading: prismic.KeyTextField;

  /**
   * Heading field in *ContactSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *ContactSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Button Text field in *ContactSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: contact_section.default.primary.CtaBtnText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  CtaBtnText: prismic.KeyTextField;
}

/**
 * Default variation for ContactSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ContactSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ContactSection*
 */
type ContactSectionSliceVariation = ContactSectionSliceDefault;

/**
 * ContactSection Shared Slice
 *
 * - **API ID**: `contact_section`
 * - **Description**: ContactSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ContactSectionSlice = prismic.SharedSlice<
  "contact_section",
  ContactSectionSliceVariation
>;

/**
 * Primary content in *ExperienceSection → Default → Primary*
 */
export interface ExperienceSectionSliceDefaultPrimary {
  /**
   * Heading field in *ExperienceSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: experience_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;
}

/**
 * Default variation for ExperienceSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ExperienceSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ExperienceSection*
 */
type ExperienceSectionSliceVariation = ExperienceSectionSliceDefault;

/**
 * ExperienceSection Shared Slice
 *
 * - **API ID**: `experience_section`
 * - **Description**: ExperienceSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ExperienceSectionSlice = prismic.SharedSlice<
  "experience_section",
  ExperienceSectionSliceVariation
>;

/**
 * Item in *FeaturedProjects → Default → Primary → Featured Projects*
 */
export interface FeaturedProjectsSliceDefaultPrimaryFeaturedProjectsItem {
  /**
   * Project field in *FeaturedProjects → Default → Primary → Featured Projects*
   *
   * - **Field Type**: Content Relationship
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.featuredProjects[].project
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  project: prismic.ContentRelationshipField<"project">;
}

/**
 * Primary content in *FeaturedProjects → Default → Primary*
 */
export interface FeaturedProjectsSliceDefaultPrimary {
  /**
   * Heading field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Featured Projects field in *FeaturedProjects → Default → Primary*
   *
   * - **Field Type**: Group
   * - **Placeholder**: *None*
   * - **API ID Path**: featured_projects.default.primary.featuredProjects[]
   * - **Documentation**: https://prismic.io/docs/field#group
   */
  featuredProjects: prismic.GroupField<
    Simplify<FeaturedProjectsSliceDefaultPrimaryFeaturedProjectsItem>
  >;
}

/**
 * Default variation for FeaturedProjects Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<FeaturedProjectsSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *FeaturedProjects*
 */
type FeaturedProjectsSliceVariation = FeaturedProjectsSliceDefault;

/**
 * FeaturedProjects Shared Slice
 *
 * - **API ID**: `featured_projects`
 * - **Description**: FeaturedProjects
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type FeaturedProjectsSlice = prismic.SharedSlice<
  "featured_projects",
  FeaturedProjectsSliceVariation
>;

/**
 * Primary content in *IntroSection → Default → Primary*
 */
export interface IntroSectionSliceDefaultPrimary {
  /**
   * Sub Heading field in *IntroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_section.default.primary.subHeading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  subHeading: prismic.KeyTextField;

  /**
   * Heading field in *IntroSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  heading: prismic.RichTextField;

  /**
   * Description field in *IntroSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_section.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Button Text field in *IntroSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_section.default.primary.CtaBtnText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  CtaBtnText: prismic.KeyTextField;

  /**
   * CTA Button Link field in *IntroSection → Default → Primary*
   *
   * - **Field Type**: Link
   * - **Placeholder**: *None*
   * - **API ID Path**: intro_section.default.primary.CtaBtnLink
   * - **Documentation**: https://prismic.io/docs/field#link-content-relationship
   */
  CtaBtnLink: prismic.LinkField;
}

/**
 * Default variation for IntroSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<IntroSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *IntroSection*
 */
type IntroSectionSliceVariation = IntroSectionSliceDefault;

/**
 * IntroSection Shared Slice
 *
 * - **API ID**: `intro_section`
 * - **Description**: IntroSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type IntroSectionSlice = prismic.SharedSlice<
  "intro_section",
  IntroSectionSliceVariation
>;

/**
 * Primary content in *ProjectsSection → Default → Primary*
 */
export interface ProjectsSectionSliceDefaultPrimary {
  /**
   * Heading field in *ProjectsSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_section.default.primary.heading
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  heading: prismic.KeyTextField;

  /**
   * Description field in *ProjectsSection → Default → Primary*
   *
   * - **Field Type**: Rich Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_section.default.primary.description
   * - **Documentation**: https://prismic.io/docs/field#rich-text-title
   */
  description: prismic.RichTextField;

  /**
   * CTA Button Text field in *ProjectsSection → Default → Primary*
   *
   * - **Field Type**: Text
   * - **Placeholder**: *None*
   * - **API ID Path**: projects_section.default.primary.CtaBtnText
   * - **Documentation**: https://prismic.io/docs/field#key-text
   */
  CtaBtnText: prismic.KeyTextField;
}

/**
 * Default variation for ProjectsSection Slice
 *
 * - **API ID**: `default`
 * - **Description**: Default
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSectionSliceDefault = prismic.SharedSliceVariation<
  "default",
  Simplify<ProjectsSectionSliceDefaultPrimary>,
  never
>;

/**
 * Slice variation for *ProjectsSection*
 */
type ProjectsSectionSliceVariation = ProjectsSectionSliceDefault;

/**
 * ProjectsSection Shared Slice
 *
 * - **API ID**: `projects_section`
 * - **Description**: ProjectsSection
 * - **Documentation**: https://prismic.io/docs/slice
 */
export type ProjectsSectionSlice = prismic.SharedSlice<
  "projects_section",
  ProjectsSectionSliceVariation
>;

declare module "@prismicio/client" {
  interface CreateClient {
    (
      repositoryNameOrEndpoint: string,
      options?: prismic.ClientConfig,
    ): prismic.Client<AllDocumentTypes>;
  }

  namespace Content {
    export type {
      ExperienceDocument,
      ExperienceDocumentData,
      FooterDocument,
      FooterDocumentData,
      HeaderDocument,
      HeaderDocumentData,
      HeaderDocumentDataMenuItem,
      HomepageDocument,
      HomepageDocumentData,
      HomepageDocumentDataSlicesSlice,
      PageDocument,
      PageDocumentData,
      PageDocumentDataSlicesSlice,
      ProjectDocument,
      ProjectDocumentData,
      SettingsDocument,
      SettingsDocumentData,
      AllDocumentTypes,
      AboutSectionSlice,
      AboutSectionSliceDefaultPrimaryTechnologiesItem,
      AboutSectionSliceDefaultPrimary,
      AboutSectionSliceVariation,
      AboutSectionSliceDefault,
      ContactSectionSlice,
      ContactSectionSliceDefaultPrimary,
      ContactSectionSliceVariation,
      ContactSectionSliceDefault,
      ExperienceSectionSlice,
      ExperienceSectionSliceDefaultPrimary,
      ExperienceSectionSliceVariation,
      ExperienceSectionSliceDefault,
      FeaturedProjectsSlice,
      FeaturedProjectsSliceDefaultPrimaryFeaturedProjectsItem,
      FeaturedProjectsSliceDefaultPrimary,
      FeaturedProjectsSliceVariation,
      FeaturedProjectsSliceDefault,
      IntroSectionSlice,
      IntroSectionSliceDefaultPrimary,
      IntroSectionSliceVariation,
      IntroSectionSliceDefault,
      ProjectsSectionSlice,
      ProjectsSectionSliceDefaultPrimary,
      ProjectsSectionSliceVariation,
      ProjectsSectionSliceDefault,
    };
  }
}