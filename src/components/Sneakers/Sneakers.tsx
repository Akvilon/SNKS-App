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
    const [startPageIndex, setStartPageIndex] = useState<number>(CONST.default.paginationFirstIndexPerPage)
    const [lastPageIndex, setLastPageIndex] = useState<number>(CONST.default.paginationLastIndexPerPage)
    const [activePaginationIndex, setActivePaginationIndex] = useState<number>(0);

    useEffect(() => {
        fetchSneakersList(gender, 'All', 1)
    }, [])

    const onBrandBtnClickHandler = (brand: string, index: number, page: number) => {
        setActiveIndex(index);
        setStartPageIndex(CONST.default.paginationFirstIndexPerPage);
        setLastPageIndex(CONST.default.paginationLastIndexPerPage);
        setActivePaginationIndex(0)
        fetchSneakersList(gender, brand, 1)
    }

    const onPaginationBtnClickHandler = (page: number, index: number) => {
        window.scrollTo(0, 500)
        const brand = CONST.default.brands.filter((el, index) => index === activeIndex)[0]
        setActivePaginationIndex(index)
        if (page === lastPageIndex) {
            setStartPageIndex(lastPageIndex - 1);
            setLastPageIndex(lastPageIndex + CONST.default.paginationLastIndexPerPage - 1);
            setActivePaginationIndex(0)
        }
        fetchSneakersList(gender, brand, page)
    }

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
                                    startPageIndex={startPageIndex}
                                    lastPageIndex={lastPageIndex}
                                    active={activePaginationIndex}
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