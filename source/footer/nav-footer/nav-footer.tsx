import * as React from 'react';
import './nav-footer.scss';
import PhoneNumber from '../../shared/phone-number/phone-number';
import Button from '../../shared/button/button';

export default () => (
  <div className="nav-footer">
    <div className="container">
      <div className="contact-block">
        <PhoneNumber />
        <Button label="Заказать звонок!" clickHandler="" />

      </div>
      <div className="menu">
        <span>Продукция:</span>
        <a href=" "><span className="underline">Котлы</span></a>
        <a href=" "><span className="underline">Дробилки</span></a>
        <a href=" "><span className="underline">Гидроразделители</span></a>
      </div>
      <div className="menu">
        <span>О компании:</span>
        <a href=" "><span className="underline">Доставка</span></a>
        <a href=" "><span className="underline">Контакты</span></a>
      </div>
    </div>
  </div>
);
