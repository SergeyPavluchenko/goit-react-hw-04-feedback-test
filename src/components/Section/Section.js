import { SectionStyle } from './SectionStyled';

export const Section = ({ title, children }) => {
  return (
    <section>
      <SectionStyle>{title}</SectionStyle>
      {children}
    </section>
  );
};
