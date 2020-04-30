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
    firstPageIndex: number;
    lastNumberPerPage: number;
    active: number;
    previousPage: string | null;
    nextPage: string | null;
    onPaginationBtnClickHandler: (page: number, index: number) => void;
    onNextBtnClick: () => void;
    onPreviousBtnClick: () => void;
    onFirstBtnClickHandler: () => void;
    onLastBtnClickHandler: () => void
}

const Pagination: React.FC<PaginationProps> = ({
    paginationLength,
    firstPageIndex,
    lastNumberPerPage,
    onPaginationBtnClickHandler,
    active,
    previousPage,
    onPreviousBtnClick,
    nextPage,
    onNextBtnClick,
    onFirstBtnClickHandler,
    onLastBtnClickHandler
}) => {

    const theme = useTheme();
    const classes = useStyles({ theme });
    const numbers: Array<number> = [];

    for (let i = 1; i <= paginationLength; i++) {
        numbers.push(i)
    }
    const [activeIndex, setActiveIndex] = useState<number>(0)

    return (
        <div className={classes.pagination}>
            <Button
                type={'button'}
                variant={ButtonVariant.DEFAULT}
                onClick={onPreviousBtnClick}
                disabled={previousPage ? false : true}>
                {'Previous'}
            </Button>
            {
                lastNumberPerPage > 5 &&
                <div className={classes.paginationFirstPage}>
                    <Button
                        type={'button'}
                        variant={ButtonVariant.DEFAULT}
                        onClick={onFirstBtnClickHandler}>
                        1
                    </Button>
                    <p>...</p>
                </div>
            }
            {numbers.slice(firstPageIndex, lastNumberPerPage).map((number, index) => {
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
            {
                lastNumberPerPage !== paginationLength &&
                <div className={classes.paginationLastPage}>
                    <p>...</p>
                    <Button
                        type={'button'}
                        variant={ButtonVariant.DEFAULT}
                        onClick={onLastBtnClickHandler}>
                        {paginationLength}
                    </Button>
                </div>
            }
            <Button
                type={'button'}
                variant={ButtonVariant.DEFAULT}
                onClick={onNextBtnClick}
                disabled={nextPage ? false : true}>
                {'Next'}
            </Button>
        </div>
    )
}

export { Pagination }