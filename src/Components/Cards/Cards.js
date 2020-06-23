import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css";
import CountUp from "react-countup";
import cx from "classnames";
const Cards = ({ data: { data, country } }) => {
	console.log(data, country);
	const { confirmed, recovered, deaths, lastUpdate } = data;
	if (!confirmed) {
		return "Loading...";
	}
	return (
		<div className={styles.container}>
			<Grid container spacing={3} justify="center">
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.infected)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Infected
						</Typography>
						<Typography varaint="h1">
							<CountUp
								start={0}
								end={confirmed.value}
								duraction={2.5}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography varaint="body">
							Number of active cases of COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.recovered)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Recovered
						</Typography>
						<Typography varaint="h1">
							<CountUp
								start={0}
								end={recovered.value}
								duraction={2.5}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography varaint="body">
							Number of Recoveries from COVID-19
						</Typography>
					</CardContent>
				</Grid>
				<Grid
					item
					component={Card}
					xs={12}
					md={3}
					className={cx(styles.card, styles.deaths)}
				>
					<CardContent>
						<Typography color="textSecondary" gutterBottom>
							Deathed
						</Typography>
						<Typography varaint="h1">
							<CountUp
								start={0}
								end={deaths.value}
								duraction={2.5}
								separator=","
							/>
						</Typography>
						<Typography color="textSecondary">
							{new Date(lastUpdate).toDateString()}
						</Typography>
						<Typography varaint="body">
							Number of Deaths caused by COVID-19
						</Typography>
					</CardContent>
				</Grid>
			</Grid>
		</div>
	);
};

export default Cards;
