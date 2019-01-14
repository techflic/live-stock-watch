import React from "react";
import PropTypes from "prop-types";
import { formatTimeStamp, indicatorOf } from "../../utils";
import { withStyles } from "@material-ui/core/styles";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    Paper,
    Tooltip
} from "@material-ui/core";

const CustomTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const styles = theme => ({
    root: {
        width: "95%",
        marginTop: theme.spacing.unit * 3,
        marginLeft: 35,
        marginBottom: 20,
        overflowX: "hidden"
    },
    table: {
        minWidth: 700,
        margin: 0
    },
    row: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.background.default
        }
    }
});

function StocksList({ data, connected, connecting, classes, socketEvent }) {
    const rows = Object.values(data)
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((item, index) => ({
            id: index,
            name: item.name,
            price: item.price[item.price.length - 1],
            priceArr: item.price,
            prev_price:
                item.price.length > 1
                    ? item.price[item.price.length - 2]
                    : "--",
            updatedAt: formatTimeStamp(item.updatedAt)
        }));
    return !connected && connecting ? (
        <div style={{ textAlign: "center", marginTop: "10%" }}>
            {socketEvent.type === "close" ? (
                <p style={{ color: "red" }}>
                    Socket connection Interrupted. Reconnecting...
                </p>
            ) : null}
            <img
                alt="...loading"
                src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA=="
            />
        </div>
    ) : (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <CustomTableCell>Stocks</CustomTableCell>
                        <CustomTableCell align="center">Price</CustomTableCell>
                        <CustomTableCell align="center">
                            Previous Price
                        </CustomTableCell>
                        <CustomTableCell align="center">
                            Last Updated At
                        </CustomTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => {
                        return (
                            <TableRow
                                hover={true}
                                className={classes.row}
                                key={row.id}
                                onClick={e => {
                                    alert("hi");
                                }}
                            >
                                <CustomTableCell component="th" scope="row">
                                    {row.name}
                                </CustomTableCell>
                                <CustomTableCell
                                    align="center"
                                    style={{
                                        backgroundColor: indicatorOf(
                                            row.priceArr
                                        ),
                                        padding: "5px",
                                        width: "216px"
                                    }}
                                >
                                    {row.price}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                    {row.prev_price}
                                </CustomTableCell>
                                <CustomTableCell align="center">
                                    {row.updatedAt}
                                </CustomTableCell>
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

StocksList.propTypes = {
    connected: PropTypes.bool,
    connecting: PropTypes.bool,
    data: PropTypes.object
};

export default withStyles(styles)(StocksList);
