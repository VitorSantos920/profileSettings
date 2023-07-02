import { CaretRight } from '@phosphor-icons/react';
import { OptionItemContainer } from './style';
import { ElementType } from 'react';

export interface IOptionitemProps extends React.HTMLAttributes<HTMLElement> {
  icon: ElementType;
  text: string;
  arrow?: boolean;
}

export function Optionitem({
  text,
  icon: Icon,
  arrow = true,
}: IOptionitemProps) {
  return (
    <OptionItemContainer className="option-item flex">
      <div className="content flex">
        <Icon className="option_symbol" width="1.25rem" height="1.25rem" />
        <a href="#" className="option__info">
          {text}
        </a>
      </div>

      {arrow && <CaretRight className="arrow" />}
    </OptionItemContainer>
  );
}
