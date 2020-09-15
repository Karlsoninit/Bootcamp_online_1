import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

export function ArticleCard({
  data: { title, urlToImage, content, publishedAt },
  lernMoreHandler,
}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} component="li">
      <CardActionArea>
        <CardMedia className={classes.media} image={urlToImage} title={title} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {content}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button
          size="small"
          color="primary"
          onClick={() => lernMoreHandler(publishedAt)}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
