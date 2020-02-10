import React from "react";

import "./Profile.css";
import {
    Avatar,
    Card,
    CardMedia,
    CardContent,
    Typography,
    List,
    ListItemAvatar
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const Profile = () => {
    const useStyles = makeStyles({
        profile: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            boder: 0,
            hight: "auto",
            width: "100%"
        },
        avaterBox: {
            alignItems: "center",
            width: "20%",
            height: "30vh",
            objectFit: "cover"
        },
        personalData: {
            widh: "40%",
            textAlign: "left"
        },
        skills: {
            width: "40%",
            textAlign: "left"
        }
    });
    const classes = useStyles();

    return (
        <div id="aboutMe" className="personalContent">
            <h1 style={{ textAlign: "center" }}>
                <i className="fas fa-user" />
                About me
            </h1>

            <Card className={classes.profile}>
                <CardMedia
                    image={require("../..//media/image/profile_icon.png")}
                    className={classes.avaterBox}
                />

                <CardContent className={classes.personalData}>
                    <PersonalData />
                </CardContent>

                <CardContent className={classes.skills}>
                    <Skills />
                </CardContent>
            </Card>
        </div>
    );
};

const PersonalData = () => {
    return (
        <div id="profileData">
            <Typography variant="h5">Personal Data</Typography>
            <p>
                名前：Jun Goya <br />
                誕生日：1993.6.20 <br />
                趣味：料理，ゲーム，競技プログラミング <br />
            </p>
        </div>
    );
};

const Skills = () => {
    const useStyles = makeStyles({
        root: {
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            alignItems: "center"
        },
        item: {
            width: 50,
            height: "100%",
            objectFit: "cover"
        },
        itemSquare: {
            width: 50,
            height: 50,
            objectFit: "cover"
        },
        itemWide: {
            width: "100%",
            height: 50,
            objectFit: "cover"
        }
    });
    const classes = useStyles();

    const LangSkill = () => {
        return (
            <div id="SkillIcons">
                <List className={classes.root}>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/Fortran.svg")}
                            variant="square"
                            className={classes.itemSquare}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/python.svg")}
                            variant="square"
                            className={classes.itemSquare}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/haskell.svg")}
                            variant="square"
                            className={classes.itemSquare}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/javascript.svg")}
                            variant="square"
                            className={classes.itemSquare}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/html-5.svg")}
                            variant="square"
                            className={classes.item}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/gopher.svg")}
                            variant="square"
                            className={classes.item}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/git.svg")}
                            variant="square"
                            className={classes.itemWide}
                        />
                    </ListItemAvatar>
                    <ListItemAvatar>
                        <Avatar
                            src={require("../../media/image/github-octocat.svg")}
                            variant="square"
                            className={classes.item}
                        />
                    </ListItemAvatar>
                </List>
            </div>
        );
    };

    return (
        <div id="skill">
            <Typography variant="h5">
                <i className="fas fa-clipboard" />
                Skill
            </Typography>

            <p>使える言語：Python3, Fortran, Haskell, JavaScript, TypeScript</p>
            <LangSkill />
        </div>
    );
};
