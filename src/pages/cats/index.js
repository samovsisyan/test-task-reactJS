import React, {useEffect, useState} from 'react'
import {categoriesAction} from '../../store/actions/categories'
import {catsAction} from '../../store/actions/cats'
import {Button} from '../../elememnt/button'
import Images from '../../elememnt/images'
import {connect} from 'react-redux'
import {Navbar} from '../navbar'
import _ from 'lodash'

const Cats = (props) => {
  const {cats, catsAction, categories, categoriesAction, loader} = props
  const [category, setCategory] = useState({})
  const [limit, setLimit] = useState(10)
  useEffect(() => {
    catsAction()
    categoriesAction()
  }, [])

  useEffect(() => {
    handleChangeCategory(limit, category?.id)
    categoriesAction(category, true)
  }, [limit, category])

  const handleChangeCategory = (limit) => {
    catsAction(limit, category?.id)
  }

  return (
    <>
      <Navbar
        data={categories?.data}
        onClick={(category) => {
          setCategory(category)
          setCategory(category)
          handleChangeCategory(limit)
        }}
      />
      <div className='card'>
        {!_.isEmpty(cats) && cats?.map(cat => {
          return (
            <Images
              img={cat?.url}
              key={cat.id}
            />
          )
        })}
      </div>
      {!_.isEmpty(cats) && <div className='all-buttons'>
        <Button onClick={() => setLimit(limit + 2)} text={'Add limit'}/>
        <Button onClick={() => setLimit(limit - 2)} text={'Subtract limit'}/>
      </div>}
    </>
  )
}

const mapStateToProps = (state) => ({
  cats: state.cats.cats,
  loader: state.cats.loader,
  limit: state.cats.limit,
  categories: state.categories.categories,
});

const mapDispatchToProps = {
  categoriesAction,
  catsAction
};

const Container = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Cats);

export default Container;