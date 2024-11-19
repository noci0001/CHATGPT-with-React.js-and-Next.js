import React from 'react';
import './brand.css';
import { LAINOX, PIM, TEKA } from './imports.js'
import { useTranslation } from 'react-i18next';

const Brand = () => {
  const { t } = useTranslation();
  return (
    <div className='greentech__brand section__padding'>
      <p>{t('brand.title')}</p>
      <div>
        <img id="lainox" src={LAINOX} width={"150px"} alt='Lainox' />
      </div>
      <div>
        <img src={TEKA} width={"60px"} alt='Teka' />
      </div>
      <div>
        <img src={PIM} width={"125px"} alt='PIM' />
      </div>
    </div >
  )
}

export default Brand