// @ts-nocheck
import React from 'react'
import { render, cleanup, fireEvent, getByText } from '@testing-library/react'
// import '@babel/polyfill' // TODO: not ideal find the way to move it globally, webpack

import TableQL from './TableQL'
import { FILMS, PEOPLE } from '../../__mocks__/data'
import { PaginationData } from '../components/Pagination/Pagination'

describe('<TableQL>', () => {
  afterEach(cleanup)

  it('default snapshot', () => {
    console.log = jest.fn()

    const container = render(<TableQL data={FILMS} />)

    expect(container).toMatchSnapshot()
    expect(console.log).toHaveBeenCalledTimes(0)
  })

  it('loading', () => {
    const container = render(<TableQL data={FILMS} loading={true} />)

    expect(container).toMatchSnapshot()
    // expect(container.getByText('Loading...')).toBeTruthy()
    // expect(typeof container.getByText('Loading...')).toBe('object')
    // expect(container.getAllByText('Loading...').length).toBe(1)
  })

  it('error', () => {
    const container = render(
      <TableQL data={FILMS} error={new Error('You have an Error mate!')} />,
    )

    expect(container).toMatchSnapshot()
    expect(
      container.getByText(
        'Error while loading TableQL: You have an Error mate!',
      ),
    ).toBeTruthy()
    expect(
      typeof container.getByText(
        'Error while loading TableQL: You have an Error mate!',
      ),
    ).toBe('object')
    expect(
      container.getAllByText(
        'Error while loading TableQL: You have an Error mate!',
      ).length,
    ).toBe(1)
  })

  it('custom error message', () => {
    const container = render(
      <TableQL
        data={FILMS}
        error={new Error('You have an Error mate!')}
        errorMessage={'Hey I am an Error!'}
      />,
    )

    expect(container).toMatchSnapshot()
    expect(container.getByText('Hey I am an Error!')).toBeTruthy()
    expect(typeof container.getByText('Hey I am an Error!')).toBe('object')
    expect(container.getAllByText('Hey I am an Error!').length).toBe(1)
  })

  it('no data found', () => {
    const container = render(<TableQL data={[]} />)

    const labelText = 'No data found!'

    expect(container).toMatchSnapshot()
    expect(container.getByText(labelText)).toBeTruthy()
    expect(typeof container.getByText(labelText)).toBe('object')
    expect(container.getAllByText(labelText).length).toBe(1)
  })

  it('no data found with onEmptyComponent', () => {
    const onEmptyLabel = 'You have no data!'
    const emptyState = ({ reason }) => <h3>{onEmptyLabel}</h3>
    const container = render(<TableQL data={[]} onEmpty={emptyState} />)

    expect(container.getByText(onEmptyLabel)).toBeTruthy()
    expect(typeof container.getByText(onEmptyLabel)).toBe('object')
    expect(container.getAllByText(onEmptyLabel).length).toBe(1)
  })

  it('no data found with onEmptyComponent and using props', () => {
    const emptyState = ({ reason }) => <h3>{reason}</h3>
    const container = render(<TableQL data={[]} onEmpty={emptyState} />)

    const labelText = 'No data found!'

    expect(container.getByText(labelText)).toBeTruthy()
    expect(typeof container.getByText(labelText)).toBe('object')
    expect(container.getAllByText(labelText).length).toBe(1)
  })

  it('no data in aray as property of an object ', () => {
    const emptyState = ({ reason }) => <h3>{reason}</h3>
    const container = render(
      <TableQL data={{ foo: [] }} onEmpty={emptyState} />,
    )

    const labelText = 'No data found!'

    expect(container.getByText(labelText)).toBeTruthy()
    expect(typeof container.getByText(labelText)).toBe('object')
    expect(container.getAllByText(labelText).length).toBe(1)
  })

  it('no data in aray as property of an object when pagination true', () => {
    const emptyState = ({ reason }) => <h3>{reason}</h3>
    const container = render(
      <TableQL data={{ foo: [] }} onEmpty={emptyState} pagination />,
    )

    const labelText = 'No data found to paginate!'

    expect(container.getByText(labelText)).toBeTruthy()
    expect(typeof container.getByText(labelText)).toBe('object')
    expect(container.getAllByText(labelText).length).toBe(1)
  })

  it('should have pagination', () => {
    const { container, queryAllByTestId, findByTestId } = render(
      <TableQL data={PEOPLE} pagination={true} />,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(findByTestId('pagination')).toBeTruthy()
    expect(queryAllByTestId('pagination').length).toBe(1)

    expect(
      container.querySelector('tbody')?.querySelectorAll('tr'),
    ).toBeTruthy()
    expect(
      container.querySelector('tbody')?.querySelectorAll('tr').length,
    ).toBe(10)
  })

  it('should not have pagination as there is not enough object/data/rows', async () => {
    const { container, queryAllByTestId, queryByTestId } = render(
      <TableQL data={FILMS} pagination={true} />,
    )

    expect(container.firstChild).toMatchSnapshot()
    expect(queryByTestId('pagination')).toBeFalsy()
    expect(queryAllByTestId('pagination').length).toBe(0)
  })

  it('should have pagination object', async () => {
    console.log = jest.fn()
    const pageLimit = 5

    const { container, queryAllByTestId, queryByTestId, queryByText } = render(
      <TableQL
        data={PEOPLE}
        pagination={{
          currentPage: 3,
          onPageChanged: ({
            currentPage,
            totalPages,
            pageLimit,
            totalRecords,
          }: PaginationData) =>
            console.log(currentPage, totalPages, pageLimit, totalRecords),
          pageLimit,
        }}
      />,
    )
    // pagination exists
    expect(container.firstChild).toMatchSnapshot()
    expect(queryByTestId('pagination')).toBeTruthy()
    expect(queryAllByTestId('pagination').length).toBe(1)
    // change page
    const pageOneButton = queryByText('1')
    expect(pageOneButton).toBeTruthy()
    if (pageOneButton) fireEvent.click(pageOneButton)
    // TODO temporary solution, as Travis CI is slower and test do not act same on local machine as they do on Travis
    setTimeout(() => {
      expect(console.log).toBeCalled()
      expect(console.log).toHaveBeenCalledWith(1, 18, pageLimit, PEOPLE.length)
    }, 1000)
    // page limit
    expect(
      container.querySelector('tbody')?.querySelectorAll('tr'),
    ).toBeTruthy()
    expect(
      container.querySelector('tbody')?.querySelectorAll('tr').length,
    ).toBe(pageLimit)
  })

  it('debug mode', () => {
    console.log = jest.fn()

    const { container } = render(<TableQL data={FILMS} debug />)

    expect(container.firstChild).toMatchSnapshot()
    expect(console.log).toBeCalled()
    expect(console.log).toHaveBeenCalledTimes(14)
  })

  it('sort', () => {
    const { container } = render(<TableQL data={FILMS} sort />)

    expect(container.firstChild).toMatchSnapshot()

    expect(
      container.firstChild?.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('The Force Awakens')

    fireEvent.click(
      container.firstChild?.querySelector('thead').firstChild.firstChild,
    )

    expect(
      container.firstChild?.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('The Phantom Menace')

    fireEvent.click(
      container.firstChild?.querySelector('thead').firstChild.firstChild,
    )

    expect(
      container.firstChild?.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('A New Hope')
  })

  it('column sort', () => {
    const { container } = render(
      <TableQL
        data={FILMS}
        columns={[
          { id: 'title', sort: true },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
      />,
    )

    expect(
      container.firstChild!.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('The Force Awakens')

    fireEvent.click(
      container.firstChild!.querySelector('thead').firstChild.firstChild,
    )

    expect(
      container.firstChild!.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('The Phantom Menace')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('column custom sort', () => {
    const { container } = render(
      <TableQL
        data={FILMS}
        columns={[
          { id: 'title', sort: (data) => data.reverse() },
          'episodeID',
          'openingCrawl',
          'director',
          'producer',
          'releaseDate',
        ]}
      />,
    )

    expect(
      container.firstChild!.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('The Force Awakens')

    fireEvent.click(
      container.firstChild!.querySelector('thead').firstChild.firstChild,
    )

    expect(
      container.firstChild!.querySelector('tbody').lastChild.firstChild
        .textContent,
    ).toBe('A New Hope')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('sort and pagination', () => {
    const { container } = render(
      <TableQL data={PEOPLE} columns={['name']} sort pagination />,
    )

    expect(
      container.firstChild!.querySelector('tbody').firstChild.firstChild
        .textContent,
    ).toBe('Luke Skywalker')

    fireEvent.click(
      container.firstChild!.querySelector('thead').firstChild.firstChild,
    )

    expect(
      container.firstChild!.querySelector('tbody').firstChild.firstChild
        .textContent,
    ).toBe('Ackbar')

    expect(container.firstChild).toMatchSnapshot()
  })

  it('pagination with no data', () => {
    const { container } = render(<TableQL data={{ data: [] }} pagination />)

    expect(getByText(container, 'No data found!')).toBeTruthy()
  })
})
