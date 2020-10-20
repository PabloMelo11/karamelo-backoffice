export type IMainModalProps = {
  title?: string;
  subtitle?: string;
  headerBackgroundColor?: 'purple' | 'red' | 'yellow' | 'green' | 'blue';
  hasImage?: boolean;
  headerStyle?: object;
  containerStyles?: object;
  contentStyles?: object;
};

export type IHeader = {
  backgroundColor?: 'purple' | 'red' | 'yellow' | 'green' | 'blue';
};
