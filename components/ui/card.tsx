import * as React from 'react';
export function Card({className='', children}:{className?:string; children: React.ReactNode}){ return <div className={`card ${className}`}>{children}</div>; }
export function CardBody({className='', children}:{className?:string; children: React.ReactNode}){ return <div className={`card-body ${className}`}>{children}</div>; }
