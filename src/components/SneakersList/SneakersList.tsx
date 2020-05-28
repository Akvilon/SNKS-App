import * as React from 'react';
import { useTheme } from 'react-jss';
import useStyles from './SneakersList.styles';
import { SneackerListModel } from '../../models/SneakerListModel';
import { Button } from '../../utils/Button';
import { ButtonVariant } from '../../utils/Button/Button.styles';
import defaultImage from '../../assets/loader.svg';
import { RouteComponentProps } from 'react-router';

type SneakersListProps = {
    list: SneackerListModel | undefined;
}

const SneakersList: React.FC<SneakersListProps & RouteComponentProps> = ({ list, ...props }) => {
    const theme = useTheme();
    const classes = useStyles(theme);
    const { history } = props;

    const openSneakerCard = (id: string) => {
        history.push(`/sneaker/${id}`)
    }

    return (
        <>
            {
                list && list.Products.map(sneaker => {
                    return (
                        <div className={classes.sneakersListBlock} key={sneaker.id} onClick={() => openSneakerCard(sneaker.id)}>
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