import React from 'react';
import Header from '../shared/Header';
import { Link } from 'react-router-dom';
import HrProfileWithImage from '../HrList/HrProfileWithImage';
import HrImage from '../../assets/img/hr-profile.jpg';
import PageTitle from './PageTitle';
import SearchBox from './SearchBox';

export default function HrCatalog() {
  return (
    <React.Fragment>
      <div className='container'>
        <div className='catalog'>
          <PageTitle heading='HR Catalog' />
          <SearchBox />
        </div>
        <div className='hr-catalog-content'>
          <div className='filter'>
            <p>HR Field</p>
            <div className='filter-selector'>
              <FilterSelector name='All' />
              <FilterSelector name='Tech Company' />
              <FilterSelector name='Food Industry' />
              <FilterSelector name='Textile Industry' />
            </div>
          </div>
          <div className='cards-container'>
            <HrProfileWithImage
              image={HrImage}
              name='John Doe'
              company='Dhuduk Inc.'
              experience='12 Years of experience'
              totalCV='47 CV reviewed'
              totalMock='158 Mock Interviews'
              stars='***'
            />

            <HrProfileWithImage
              image={HrImage}
              name='John Doe'
              company='Dhuduk Inc.'
              experience='12 Years of experience'
              totalCV='47 CV reviewed'
              totalMock='158 Mock Interviews'
              stars='***'
            />

            <HrProfileWithImage
              image={HrImage}
              name='John Doe'
              company='Dhuduk Inc.'
              experience='12 Years of experience'
              totalCV='47 CV reviewed'
              totalMock='158 Mock Interviews'
              stars='***'
            />
            <HrProfileWithImage
              image={HrImage}
              name='John Doe'
              company='Dhuduk Inc.'
              experience='12 Years of experience'
              totalCV='47 CV reviewed'
              totalMock='158 Mock Interviews'
              stars='***'
            />
            <HrProfileWithImage
              image={HrImage}
              name='John Doe'
              company='Dhuduk Inc.'
              experience='12 Years of experience'
              totalCV='47 CV reviewed'
              totalMock='158 Mock Interviews'
              stars='***'
            />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

function FilterSelector({ name }) {
  return (
    <React.Fragment>
      <li>
        <button type='button' name={name}>
          {name}
        </button>
      </li>
    </React.Fragment>
  );
}
