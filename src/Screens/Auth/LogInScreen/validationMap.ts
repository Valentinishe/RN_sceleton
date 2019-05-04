import {
  isRequired,
} from '@Utils/validationRules';

export default {
  email: {
    messages: {
      required:    'This field is required.',
    },
    methods: {
      required: isRequired,
    },
  },
  password: {
    messages: {
      required:    'This field is required.',
    },
    methods: {
      required: isRequired,
    },
  },
};
