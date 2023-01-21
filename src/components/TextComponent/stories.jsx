import { TextComponent } from '.';

export default {
  title: 'TextComponent',
  component: TextComponent,
  args: {
    children:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut ducimus vitae quisquam optio exercitationem nam. Sunt nisi reprehenderit, amet temporibus id libero, maxime, voluptatibus dolores enim voluptate ad reiciendis quisquam!',
  },
  argTypes: {
    children: { type: 'string' },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};

export const Light = (args) => <TextComponent {...args} />;
export const Dark = (args) => <TextComponent {...args} />;

Light.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Dark.args = {
  children: 'O texto está claro',
  colorDark: false,
};
