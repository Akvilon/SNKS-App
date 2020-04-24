import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SneakersList.styles';
import { SneackerListModel } from '../../models/SneakerListModel';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import defaultImage from '../../assets/loader.svg';

type SneakersList = {
    list: SneackerListModel | undefined;
}

const SneakersList: React.FC<SneakersList> = ({ list }) => {
    const theme = useTheme();
    const classes = useStyles(theme)
    return (
        <>
            {
                list && list.Products.map(sneaker => {
                    return (
                        <div className={classes.sneakersListBlock} key={sneaker.id}>
                            <div className={classes.sneakersListBlockImg}>
                                {
                                    sneaker.media.smallImageUrl && sneaker.media.smallImageUrl.indexOf('New-Product-Placeholder-Default') < 0 
                                    ?
                                    <img src={sneaker.media.smallImageUrl} alt="sneaker image" /> 
                                    : 
                                    <img src={defaultImage} alt="sneaker image" /> 
                                }

                            </div>
                            <div className={classes.sneakersListBlockInfo}>
                                <p>{sneaker.title}</p>
                                <p>$&nbsp;{sneaker.retailPrice}</p>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export { SneakersList }