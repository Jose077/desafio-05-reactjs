import { Icon } from './Icon';

import '../styles/button.scss';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  iconName: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  selected: boolean;
}

export function Button({ iconName, title, selected, ...rest }: ButtonProps) {

  const color = selected ? '#FAE800' : '#FBFBFB';
  const className = (selected && { className: 'selected' })

  return (
    <button type="button" {...className} {...rest}>
      <Icon name={iconName} color={color} />
      {title}
    </button>
  );
}