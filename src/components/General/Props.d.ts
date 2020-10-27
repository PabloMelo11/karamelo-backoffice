export type IMainModalProps = {
  headerBackgroundColor?: 'purple' | 'red' | 'yellow' | 'green' | 'blue';
  headerStyle?: object;
  containerStyles?: object;
  contentStyles?: object;
  triggerDone?(): void;
};

export type IHeader = {
  backgroundColor?: 'purple' | 'red' | 'yellow' | 'green' | 'blue';
};
