import * as React from 'react';
import { directive } from '@babel/types';
import { ButtonVariant } from '../Button/Button.styles';
import { Button } from '../Button';
import { useTheme, createUseStyles } from 'react-jss';
import useStyles from './Pagination.styles';
import { v4 as uuidv4 } from 'uuid';
import { useState, useEffect } from 'react';

export type PaginationProps = {
    paginationLength: number;
    onPaginationBtnClickHandler: (page: number, index: number) => void;
    startPageIndex: number;
    lastPageIndex: number;
    active: number;
}

const Pagination: React.FC<PaginationProps> = ({ paginationLength, startPageIndex, lastPageIndex, onPaginationBtnClickHandler, active }) => {
    const theme = useTheme();
    const classes = useStyles({ theme });
    const numbers: Array<number> = [];

    for (let i = 1; i < paginationLength; i++) {
        numbers.push(i)
    }
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div className={classes.pagination}>
            <Button type={'button'} variant={ButtonVariant.DEFAULT}>
                {'Previous'}
            </Button>
            {numbers.slice(startPageIndex, lastPageIndex).map((number, index) => {
                return (
                    <Button
                        key={uuidv4()}
                        type={'button'}
                        variant={ButtonVariant.DEFAULT}
                        active={index === active ? true : false}
                        onClick={() => onPaginationBtnClickHandler(number, index)}>
                        {number}
                    </Button>
                )
            })}
            <Button type={'button'} variant={ButtonVariant.DEFAULT}>
                {'Next'}
            </Button>
        </div>
    )
}

export { Pagination }