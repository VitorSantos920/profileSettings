import { ElementType } from 'react';
import { Optionitem } from '../OptionItem';
import { OptionItemContainer } from '../OptionItem/style';
import './style';
import { OptionContainer } from './style';

interface IOptionProps {
  title?: string;
  optionItems: [
    { icon: ElementType; text: string },
    { icon: ElementType; text: string }
  ];
  arrow?: boolean;
}

export function Option({ title, optionItems, arrow }: IOptionProps) {
  return (
    <OptionContainer className="option">
      {title && <h5 className="option__title">{title}</h5>}
      <OptionItemContainer className="option-items">
        {optionItems.map((item, index) => (
          <Optionitem
            key={index}
            arrow={arrow}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </OptionItemContainer>
    </OptionContainer>
  );
}
