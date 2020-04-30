import * as React from 'react';
import { useTheme } from 'react-jss';
import * as CONST from '../../constants';
import useStyles from './Sneakers.styles';
import { SneakersList } from '../SneakersList';
import { useEffect, useState } from 'react';
import { SneackerListModel } from '../../models/SneakerListModel';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import { v4 as uuidv4 } from 'uuid';
import { Pagination } from '../../utils/Pagination';

type OwnProps = {
    gender: string,
    sneakersList: SneackerListModel | undefined,
    fetchSneakersList: (gender: string, brand: string, page: number) => void,
}

const Sneakers: React.FC<OwnProps> = ({ gender, sneakersList, fetchSneakersList }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    const [firstPageIndex, setFirstPageIndex] = useState<number>(CONST.default.paginationFirstIndexPerPage)
    const [lastNumberPerPage, setLastNumberPerPage] = useState<number>(CONST.default.paginationItemsPerPage)
    const [activePaginationIndex, setActivePaginationIndex] = useState<number>(0);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const brand = CONST.default.brands.filter((el, index) => index === activeIndex)[0];
    const range = CONST.default.paginationItemsPerPage - 1;
    const lastPage = sneakersList ? +sneakersList.Pagination.lastPage.split('page=')[1].split('&')[0] : 0;

    useEffect(() => {
        fetchSneakersList(gender, 'All', 1)
    }, [])

    const onBrandBtnClickHandler = (brand: string, index: number, page: number) => {
        setActiveIndex(index);
        setFirstPageIndex(CONST.default.paginationFirstIndexPerPage);
        setLastNumberPerPage(CONST.default.paginationItemsPerPage);
        setActivePaginationIndex(0)
        fetchSneakersList(gender, brand, 1)
    }

    const onPaginationBtnClickHandler = (page: number, index: number) => {
        window.scrollTo(0, 500);
        setCurrentPage(page);
        setActivePaginationIndex(index);
        if (page === lastPage) {
            setActivePaginationIndex(index)
        } else if (page === lastNumberPerPage) {
            setFirstPageIndex(lastNumberPerPage - 1);

            if (page + range > lastPage) {
                setLastNumberPerPage(lastPage)
            } else {
                setLastNumberPerPage(lastNumberPerPage + range);
            }
            setActivePaginationIndex(0)

        } else if (page === firstPageIndex + 1) {
            setFirstPageIndex(page - range - 1);
            setLastNumberPerPage(page);
            setActivePaginationIndex(4);
        }
        fetchSneakersList(gender, brand, page)
    }

    const onPreviousBtnClick = () => {
        window.scrollTo(0, 500);
        if (currentPage === firstPageIndex) {
            setFirstPageIndex(currentPage - range);
            setLastNumberPerPage(currentPage);
            setActivePaginationIndex(3);
            setCurrentPage(currentPage - 1);
        } else if (currentPage === firstPageIndex + 1) {
            setFirstPageIndex(currentPage - range - 1);
            setLastNumberPerPage(currentPage);
            setActivePaginationIndex(3);
            setCurrentPage(currentPage - 1);
        } else if (currentPage === firstPageIndex + 2) {
            setFirstPageIndex(currentPage - range - 2);
            setLastNumberPerPage(currentPage - 1);
            setActivePaginationIndex(4);
            setCurrentPage(currentPage - 1);
        } else {
            setActivePaginationIndex(activePaginationIndex - 1);
            setCurrentPage(currentPage - 1);
        }

        fetchSneakersList(gender, brand, currentPage - 1)
    }

    const onNextBtnClick = () => {
        window.scrollTo(0, 500);
        if (currentPage === lastNumberPerPage) {
            setFirstPageIndex(lastNumberPerPage - 1);
            setActivePaginationIndex(1)
            if (currentPage + range > lastPage) {
                setLastNumberPerPage(lastPage)
                setCurrentPage(currentPage + 1);
            } else {
                setLastNumberPerPage(lastNumberPerPage + range);
                setCurrentPage(currentPage + 1);
            }

        } else if (currentPage === lastPage - 1) {
            setCurrentPage(currentPage + 1);
            setActivePaginationIndex(lastPage % CONST.default.paginationItemsPerPage)
        } else if (currentPage === lastNumberPerPage - 1) {
            setFirstPageIndex(lastNumberPerPage - 1);
            if (currentPage + range > lastPage) {
                setLastNumberPerPage(lastPage)
                setCurrentPage(currentPage + 1);
            } else {
                setLastNumberPerPage(lastNumberPerPage + range);
                setCurrentPage(currentPage + 1);
            }
            setActivePaginationIndex(0)
        } else {
            setActivePaginationIndex(activePaginationIndex + 1);
            setCurrentPage(currentPage + 1);
        }
        fetchSneakersList(gender, brand, currentPage + 1)
    }

    const onFirstBtnClickHandler = () => {
        window.scrollTo(0, 500);
        setCurrentPage(1);
        setFirstPageIndex(CONST.default.paginationFirstIndexPerPage);
        setLastNumberPerPage(CONST.default.paginationItemsPerPage);
        setActivePaginationIndex(0);
        fetchSneakersList(gender, brand, 1)
    }

    const onLastBtnClickHandler = () => {
        window.scrollTo(0, 500);
        setCurrentPage(lastPage);
        if (lastPage - CONST.default.paginationItemsPerPage > range && (lastPage - CONST.default.paginationItemsPerPage) % range !== 0) {
            setFirstPageIndex(lastPage - (lastPage - CONST.default.paginationItemsPerPage) % range - 1);
            setActivePaginationIndex((lastPage - CONST.default.paginationItemsPerPage) % range)
        } else if (lastPage - CONST.default.paginationItemsPerPage < range && (lastPage - CONST.default.paginationItemsPerPage) % range !== 0) {
            setFirstPageIndex(lastPage - (lastPage % CONST.default.paginationItemsPerPage) - 1);
            setActivePaginationIndex(lastPage % CONST.default.paginationItemsPerPage)
        } else {
            setFirstPageIndex(lastPage - range - 1);
            setActivePaginationIndex(4)
        }
        setLastNumberPerPage(lastPage);
        fetchSneakersList(gender, brand, lastPage)
    }
    
    console.log(sneakersList)
    return (
        <div className={classes.sneakers}>
            {
                gender === 'men'
                    ?
                    <div className={classes.sneakersMenBanner}></div>
                    :
                    <div className={classes.sneakersWomenBanner}></div>
            }
            <div className={classes.sneakersContainer}>
                <div className={classes.sneakersContainerTop}>
                    {
                        gender === 'men' ? <h2>Men sneakers</h2> : <h2>Women sneakers</h2>
                    }
                    <div className={classes.sneakersContainerTopSort}>
                        <input type="select" />
                    </div>
                </div>
                <div className={classes.sneakersContainerBody}>
                    <div className={classes.sneakersContainerFilters}>
                        <div className={classes.sneakersContainerFiltersInner}>
                            <h3>Brand</h3>
                            {
                                CONST.default.brands.map((brand, index) => {
                                    return (
                                        <Button
                                            key={uuidv4()}
                                            type={'button'}
                                            variant={ButtonVariant.PRIMARY}
                                            active={index === activeIndex ? true : false}
                                            onClick={() => onBrandBtnClickHandler(brand, index, 1)}>
                                            <p>{brand}</p>
                                        </ Button>
                                    )
                                })
                            }
                            <h3>Size</h3>
                        </div>
                    </div>
                    <div className={classes.sneakersContainerList}>
                        {
                            sneakersList ? <SneakersList list={sneakersList} /> : <div>LOADING...</div>
                        }

                        <div className={classes.sneakersPagination}>
                            {
                                sneakersList &&
                                <Pagination
                                    firstPageIndex={firstPageIndex}
                                    lastNumberPerPage={lastNumberPerPage}
                                    active={activePaginationIndex}
                                    previousPage={sneakersList.Pagination.previousPage}
                                    onPreviousBtnClick={onPreviousBtnClick}
                                    nextPage={sneakersList.Pagination.nextPage}
                                    onNextBtnClick={onNextBtnClick}
                                    onFirstBtnClickHandler={onFirstBtnClickHandler}
                                    onLastBtnClickHandler={onLastBtnClickHandler}
                                    paginationLength={sneakersList.Pagination.lastPage ? +sneakersList.Pagination.lastPage.split('page=')[1].split('&')[0] : 0}
                                    onPaginationBtnClickHandler={onPaginationBtnClickHandler} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sneakers }