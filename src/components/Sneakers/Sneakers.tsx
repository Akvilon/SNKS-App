import * as React from 'react';
import { useTheme } from 'react-jss';
import * as CONST from '../../constants';
import useStyles from './Sneakers.styles';
import { SneakersList } from '../SneakersList';
import { Checkbox } from '../../utils/Checkbox';
import { useEffect } from 'react';
import { SneackerListModel } from '../../models/SneakerListModel';


type OwnProps = {
    gender: string,
    sneakersByGender: SneackerListModel | undefined,
    getSneakersByGender: (gender: string) => void,
    getSneakersByBrand: (gender: string, brand: string) => void
}

const Sneakers: React.FC<OwnProps> = ({ gender, sneakersByGender, getSneakersByBrand, getSneakersByGender }) => {
    const theme = useTheme();
    const classes = useStyles(theme);

    useEffect(() => {
        getSneakersByGender(gender)
    },[])

    const getBrandTitle = (brand: string) => {
        // getSneakersByBrand(gender, brand)
        console.log('brand', brand)
    }

    const brands = [
        { id: 1, name: CONST.BRANDS.JORDAN, label: CONST.BRANDS.JORDAN },
        { id: 2, name: CONST.BRANDS.ADIDAS, label: CONST.BRANDS.ADIDAS },
        { id: 3, name: CONST.BRANDS.NIKE, label: CONST.BRANDS.NIKE },
    ]

    console.log('sneakersByGender',sneakersByGender);
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
                        <h3>Brand</h3>
                        <div>
                            {
                                brands.map(brand => {
                                    return (
                                        <label key={brand.id}>
                                            <Checkbox name={brand.name} getBrandTitle={getBrandTitle} />
                                            {brand.label}
                                        </label>
                                    )
                                })
                            }
                        </div>
                    </div>
                    <div className={classes.sneakersContainerList}>
                        <SneakersList list={sneakersByGender}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export { Sneakers }