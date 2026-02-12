export type FieldType = 'text' | 'textarea';

export interface TemplateField {
  key: string;
  label: string;
  type: FieldType;
  defaultValue: string;
  placeholder?: string;
  maxLength?: number;
}

export interface TemplateConfig {
  id: string;
  name: string;
  fields: TemplateField[];
}

export const PROPOSAL_CONFIG: TemplateConfig = {
  id: 'proposal',
  name: 'Proposal',
  fields: [
    { 
      key: 'question', 
      label: 'Main Question', 
      type: 'textarea', 
      defaultValue: 'Will you be my Valentine?',
      placeholder: 'Will you be my Valentine?',
      maxLength: 100
    },
    { 
      key: 'subtext', 
      label: 'Subtext', 
      type: 'text', 
      defaultValue: 'Please say yes... 🥺👉👈',
      placeholder: 'Please say yes...',
      maxLength: 60
    },
    { 
      key: 'yesBtn', 
      label: 'Yes Button', 
      type: 'text', 
      defaultValue: 'YESSSS! ✨',
      placeholder: 'YESSSS!',
      maxLength: 20
    },
    { 
      key: 'noBtn', 
      label: 'No Button', 
      type: 'text', 
      defaultValue: 'No thanks',
      placeholder: 'No thanks',
      maxLength: 20
    },
    { 
      key: 'successTitle', 
      label: 'Success Title', 
      type: 'text', 
      defaultValue: "Yay! I knew you'd say yes! ❤️",
      placeholder: "Yay! I knew you'd say yes!",
      maxLength: 50
    },
    { 
      key: 'successBody', 
      label: 'Success Message', 
      type: 'textarea', 
      defaultValue: 'I love you so much! See you on the 14th! 😘',
      placeholder: 'I love you so much!',
      maxLength: 200
    }
  ]
};

export const LOVE_LETTER_CONFIG: TemplateConfig = {
  id: 'love-letter',
  name: 'Love Letter',
  fields: [
    { 
      key: 'title', 
      label: 'Title', 
      type: 'text', 
      defaultValue: "Happy Valentine's!",
      placeholder: "Happy Valentine's!",
      maxLength: 50
    },
    { 
      key: 'body', 
      label: 'Message Body', 
      type: 'textarea', 
      defaultValue: 'You make every day brighter. \n Will you be my Valentine?',
      placeholder: 'You make every day brighter...',
      maxLength: 400
    },
    { 
      key: 'signature', 
      label: 'Signature', 
      type: 'text', 
      defaultValue: 'xoxo',
      placeholder: 'xoxo',
      maxLength: 30
    }
  ]
};

export const OUR_STORY_CONFIG: TemplateConfig = {
  id: 'our-story',
  name: 'Our Story',
  fields: [
    { 
      key: 'step1_title', 
      label: 'Step 1 Title', 
      type: 'text', 
      defaultValue: 'How it Started', 
      maxLength: 40
    },
    { 
      key: 'step1_content', 
      label: 'Step 1 Content', 
      type: 'textarea', 
      defaultValue: 'Remember when we first met? I knew right then that you were someone special.', 
      maxLength: 150
    },
    { 
      key: 'step2_title', 
      label: 'Step 2 Title', 
      type: 'text', 
      defaultValue: 'The Memories', 
      maxLength: 40
    },
    { 
      key: 'step2_content', 
      label: 'Step 2 Content', 
      type: 'textarea', 
      defaultValue: 'From our late night talks to our little adventures, every moment with you is a treasure I hold dear.', 
      maxLength: 150
    },
    { 
      key: 'step3_title', 
      label: 'Step 3 Title', 
      type: 'text', 
      defaultValue: 'Why I Love You', 
      maxLength: 40
    },
    { 
      key: 'step3_content', 
      label: 'Step 3 Content', 
      type: 'textarea', 
      defaultValue: 'I love your kindness, your laugh, and the way you make everything better just by being you.', 
      maxLength: 150
    },
    { 
      key: 'final_title', 
      label: 'Final Question Title', 
      type: 'text', 
      defaultValue: 'One Last Question...', 
      maxLength: 40
    },
    { 
      key: 'final_content', 
      label: 'Final Question Content', 
      type: 'textarea', 
      defaultValue: "We've made so many memories, and I want to make millions more with you.", 
      maxLength: 150
    },
    { 
      key: 'success_title', 
      label: 'Success Title', 
      type: 'text', 
      defaultValue: 'Best Decision Ever! 💖', 
      maxLength: 50
    },
    { 
      key: 'success_content', 
      label: 'Success Message', 
      type: 'textarea', 
      defaultValue: "I'm the luckiest person in the world! Can't wait for our forever. I love you! 🥰", 
      maxLength: 200
    }
  ]
};

export const SECRET_CARD_CONFIG: TemplateConfig = {
  id: 'secret-card',
  name: 'Secret Card',
  fields: [
    { 
      key: 'cover_text', 
      label: 'Cover Text', 
      type: 'text', 
      defaultValue: 'Click to Open', 
      maxLength: 20
    },
    { 
      key: 'line1', 
      label: 'Line 1 (Primary)', 
      type: 'text', 
      defaultValue: 'Happy', 
      maxLength: 15
    },
    { 
      key: 'line2', 
      label: 'Line 2', 
      type: 'text', 
      defaultValue: "Valentine's", 
      maxLength: 15
    },
    { 
      key: 'line3', 
      label: 'Line 3', 
      type: 'text', 
      defaultValue: 'Day!', 
      maxLength: 15
    }
  ]
};
