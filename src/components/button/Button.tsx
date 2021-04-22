import { ForwardRefComponent } from '../../utils/polymorphic';
import { forwardRef } from 'react';
import { __DEV__ } from '../../utils/assertion';
import { ButtonClassName } from './Button.css';
import { Primitive } from '../primitive/Primitive';

const NAME = 'Button';
const DEFAULT_TAG = 'button';

type ButtonProps = {
  isLoading: boolean;
  isDisabled: boolean;
};

type ButtonPrimitive = ForwardRefComponent<typeof DEFAULT_TAG, ButtonProps>;

const Button: ButtonPrimitive = forwardRef((props, ref) => {
  const { as = DEFAULT_TAG, isDisabled = false, isLoading = false, children, ...restProps } = props;

  return (
    <Primitive type={'button'} ref={ref} as={as} className={ButtonClassName} {...restProps}>
      {children}
    </Primitive>
  );
});

if (__DEV__) {
  Button.displayName = NAME;
}

export { Button };
