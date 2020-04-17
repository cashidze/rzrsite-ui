import React from 'react';
import './order-form.scss';
import Button from '../button/button';
import * as buttonTypes from '../../../consts/button-types';

export default () => (
  <div className="order-form" tabIndex={-1} role="dialog">
    <form action="" method="" name="orderForm">
      <fieldset>
        <legend>
          <h2>
            Вам позвонить?
          </h2>
        </legend>
        <span>Оставьте свой номер и мы сами вам позвоним</span>
        <div>
          <label htmlFor="tel">Телефон:</label>
          <input type="tel" id="tel" name="tel" required placeholder="+7-999-000-00-00" />
          <Button label="Позвоните мне!" className={buttonTypes.longCallmeButton} clickHandler="" />
        </div>
      </fieldset>
    </form>
  </div>
);
