import * as React from 'react';
import clsx from 'clsx';
type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary'|'outline'; size?: 'sm'|'md'|'lg'; className?: string; };
export function Button({variant='primary', size='md', className='', ...props}: Props){
  const v = variant === 'primary' ? 'btn btn-primary' : 'btn btn-outline';
  const s = size==='lg' ? 'px-6 py-3' : size==='sm' ? 'px-3 py-1.5 text-sm' : '';
  return <button {...props} className={clsx(v, s, className)} />;
}
