import React from "react";
import {
    Paper,
    Card,
    CardContent,
    List,
    ListItem,
    ListItemText,
    Typography
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

export const MyWorks = () => {
    return (
        <div id="works">
            <h1 style={{ textAlign: "center" }}>
                <i className="fas fa-marker" /> Works
            </h1>
            <Card>
                <CardContent>
                    <Studies />
                </CardContent>
            </Card>
        </div>
    );
};

const Studies = () => {
    const useStyles = makeStyles({
        textbox: {
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            hight: "auto",
            width: "100%"
        },
        movie: {
            width: "30%",
            padding: "auto"
        },
        textcontent: {
            width: "70%",
            textAlign: "left",
            padding: "auto"
        }
    });
    const classes = useStyles();

    return (
        <div>
            <Typography variant="h5">過去の研究</Typography>
            <Paper elevation={0} className={classes.textbox}>
                <Paper elevation={0} className={classes.movie}>
                    <video
                        style={{ width: "80%", height: "80%" }}
                        autoPlay
                        loop
                        muted
                    >
                        <source
                            src={require("../../media/image/lifeGamePython3.webm")}
                            type="video/webm"
                        />
                        <p> Life game </p>
                    </video>
                </Paper>
                <Paper elevation={0} className={classes.textcontent}>
                    大学では物理学を専攻しており，特に生物物理学（非平衡統計力学）を研究していました．
                    主な内容としては，数値計算シミュレーションを使い，生物の集団運動について理論的な解析を行うというものです．
                </Paper>
            </Paper>
            <List>
                <ListItem>
                    <ListItemText>
                        Kazusa Beppu, Ziane Izri, Jun Gohya, Kanta Eto,
                        Masatoshi Ichikawa and Yusuke T. Maeda, "Geometry-driven
                        collective ordering of bacterial vortices",
                        <i> Soft Matter </i>, 2017, <b> 13 </b> , 5038-5043{" "}
                        <a
                            href="https://pubs.rsc.org/en/content/articlelanding/2017/sm/c7sm00999b#!divAbstract"
                            style={{ textDecoration: "none" }}
                            target="_new"
                        >
                            [Soft Matter]{" "}
                        </a>
                        <a
                            href="https://arxiv.org/abs/1705.02136"
                            style={{ textDecoration: "none" }}
                            target="_new"
                        >
                            [arXiv]
                        </a>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemText>
                        合屋 純, 別府 航早,
                        口頭発表「群れる生命の謎を追え！：細胞集団に学ぶ自己組織化の原理」,
                        文部科学省主催第6回サイエンス・インカレ 数物・化学系,
                        2017年3月{" "}
                        <a
                            href="http://www.mext.go.jp/b_menu/houdou/29/03/1383477.htm"
                            style={{ textDecoration: "none" }}
                            target="_new"
                        >
                            [文部科学省HP]
                        </a>
                    </ListItemText>
                </ListItem>
            </List>
        </div>
    );
};
