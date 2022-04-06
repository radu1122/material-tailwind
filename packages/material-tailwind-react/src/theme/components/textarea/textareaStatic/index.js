import textareaStaticLabel from "theme/components/textarea/textareaStatic/textareaStaticLabel";
import textareaStaticColors from "theme/components/textarea/textareaStatic/textareaStaticColors";
import textareaStaticLabelColors from "theme/components/textarea/textareaStatic/textareaStaticLabelColors";

const textareaStatic = {
  base: {
    textarea: {
      borderWidth: "border-b",
      borderColor: "placeholder-shown:border-blue-grey-200",
    },
    label: textareaStaticLabel,
  },
  sizes: {
    md: {
      container: {
        height: "h-11",
      },
      textarea: {
        fontSize: "text-sm",
        pt: "pt-4",
        pb: "pb-1.5",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-tight",
      },
    },
    lg: {
      container: {
        height: "h-12",
      },
      textarea: {
        fontSize: "text-sm",
        px: "px-px",
        pt: "pt-5",
        pb: "pb-2",
      },
      label: {
        lineHeight: "peer-placeholder-shown:leading-tight",
      },
    },
  },
  colors: {
    textarea: textareaStaticColors,
    label: textareaStaticLabelColors,
  },
  error: {
    textarea: {
      borderColor: "border-red-500 placeholder-shown:border-red-500",
      borderColorFocused: "focus:border-red-500",
    },
    label: {
      color: "text-red-500 peer-focus:text-red-500 peer-placeholder-shown:text-red-500",
      after: "after:border-red-500 peer-focus:after:border-red-500",
    },
  },
  success: {
    textarea: {
      borderColor: "border-green-500 placeholder-shown:border-green-500",
      borderColorFocused: "focus:border-green-500",
    },
    label: {
      color: "text-green-500 peer-focus:text-green-500 peer-placeholder-shown:text-green-500",
      after: "after:border-green-500 peer-focus:after:border-green-500",
    },
  },
};

export default textareaStatic;
