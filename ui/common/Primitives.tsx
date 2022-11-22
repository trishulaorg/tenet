import React from 'react'

export const Heading1: React.FC = ({ children }) => {
  return <h1 className="my-2 text-fontcl-med text-2xl">{children}</h1>
}

export const Heading2: React.FC = ({ children }) => {
  return <h2 className="my-4 text-fontcl-med text-xl">{children}</h2>
}

export const Heading3: React.FC = ({ children }) => {
  return <h3 className="text-1xl py-1 border-solid text-fontcl-med">{children}</h3>
}

export const Paragraph: React.FC = ({ children }) => {
  return <p className="text-1xl text-fontcl-med">{children}</p>
}

export const WithPrimaryButtonStyling: React.FC = ({ children }) => {
  return (
    <div
      className={
        'mb-4 py-2 px-2 md:px-4 ml-2 lg:px-6 block text-white hover:bg-primary-dark rounded-xl border border-slate-300 bg-primary transition-colors'
      }
    >
      {children}
    </div>
  )
}

/* unused 
export const Heading4: React.FC = ({children}) => {
  return <h4 className="">{children}</h4>
}

export const Heading5: React.FC = ({children}) => {
  return <h5 className="">{children}</h5>
}

export const Heading6: React.FC = ({children}) => {
  return <h6 className="">{children}</h6>
}
*/
