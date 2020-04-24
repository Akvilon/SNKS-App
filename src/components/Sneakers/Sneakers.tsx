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

type OwnProps = {
    gender: string,
    sneakersList: SneackerListModel | undefined,
    fetchSneakersList: (gender: string, brand: string) => void,
}

const Sneakers: React.FC<OwnProps> = ({ gender, sneakersList, fetchSneakersList }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        fetchSneakersList(gender, 'All')
    }, [])

    const onBrandBtnClickHandler = (brand: string, index: number) => {
        setActiveIndex(index)
        fetchSneakersList(gender, brand)
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
                                            onClick={() => onBrandBtnClickHandler(brand, index)}>
                                            <p>{brand}</p>
                                        </ Button>
                                    )
                                })
                            }
                            <h3>Size</h3>
                        </div>
                    </div>
                    <div className={classes.sneakersContainerList}>
                        <SneakersList list={sneakersList} />

                        <div className={classes.sneakersShowMoreBtn}>
                            <Button variant={ButtonVariant.PRIMARY}>
                                <p>Show more</p>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sneakers }