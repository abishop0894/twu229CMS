import type { Schema, Struct } from '@strapi/strapi';

export interface OptionOneOptionOne extends Struct.ComponentSchema {
  collectionName: 'components_option_one_option_ones';
  info: {
    displayName: 'optionOne';
  };
  attributes: {
    optionOne: Schema.Attribute.Text;
  };
}

export interface OptionThreeOptionThree extends Struct.ComponentSchema {
  collectionName: 'components_option_three_option_threes';
  info: {
    displayName: 'optionThree';
  };
  attributes: {
    optionThree: Schema.Attribute.Text;
  };
}

export interface OptionTwoOptionTwo extends Struct.ComponentSchema {
  collectionName: 'components_option_two_option_twos';
  info: {
    displayName: 'optionTwo';
  };
  attributes: {
    optionTwo: Schema.Attribute.Text;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'option-one.option-one': OptionOneOptionOne;
      'option-three.option-three': OptionThreeOptionThree;
      'option-two.option-two': OptionTwoOptionTwo;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
