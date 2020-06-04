import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import MainFeaturedPost from '../../component/MainFeaturedPost';
import FeaturedPost from '../../component/FeaturedPost';
import Main from '../../component/Main';
import Sidebar from '../../component/Sidebar';
import Header from "../../component/header/header";
import Footer from "../../component/footer/footer";
import {blogpost1} from "../../blogposts/blog-post.1";
import {blogpost2} from "../../blogposts/blog-post.2";
import {blogpost3} from "../../blogposts/blog-post.3";
import mainimage from "../../screens/blog/blogassets/mainimage.jpg";
import image2 from "../../screens/blog/blogassets/image2.jpg";
import image3 from "../../screens/blog/blogassets/image3.jpg";

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    textAlign: 'left',

  },
}));

const mainFeaturedPost = {
  title: 'Introducing Challenges. The big, small & personal. ',
  description:
      "Discover, track and complete your personal challenges with the Challenge Accepted App.",
  image: mainimage,
  imgText: 'main image description',
  linkText: 'Continue reading…',
};

const featuredPosts = [
  {
    title: 'Why we love 30 day challenges',
    date: '4 June',
    description:
        'Reasons to give one a try and inspiration to start yours.',
    image: image2,
    imageText: 'Image Text',
  },
  {
    title: '10 reasons to love Yoga with Adriene',
    date: '4 June',
    description:
        'The Yoga YouTube series everyone is talking about.',
    image: image3,
    imageText: 'Yoga, Fitness, 10 reasons to love Yoga with Adriene, 30 day challenge',
  },
];

const posts = [blogpost3, blogpost2, blogpost1];

const sidebar = {
  title: 'Challenge Accepted.',
  description:
      'Challenge Accepted App coming to the app store June 2020.',
  archives: [
    {title: 'March 2020', url: '#'},
    {title: 'February 2020', url: '#'},
    {title: 'January 2020', url: '#'},
    {title: 'November 1999', url: '#'},
    {title: 'October 1999', url: '#'},
    {title: 'September 1999', url: '#'},
    {title: 'August 1999', url: '#'},
    {title: 'July 1999', url: '#'},
    {title: 'June 1999', url: '#'},
    {title: 'May 1999', url: '#'},
    {title: 'April 1999', url: '#'},
  ],
  social: [
    {name: 'GitHub', icon: GitHubIcon},
    {name: 'Twitter', icon: TwitterIcon},
    {name: 'Facebook', icon: FacebookIcon},
  ],
};

export default function Blog() {
  const classes = useStyles();

  return (
      <div>
        <Header tab={''}/>
        <div style={{height: 20, backgroundColor: '#2A3746'}} />
        <CssBaseline/>
        <Container maxWidth="lg" style={{marginTop: 20}}>
          <main>
            <MainFeaturedPost post={mainFeaturedPost}/>
            <Grid container spacing={4}>
              {featuredPosts.map((post) => (
                  <FeaturedPost key={post.title} post={post}/>
              ))}
            </Grid>
            <Grid container spacing={5} className={classes.mainGrid}>
              <Main title="The latest from Challenge Accepted" posts={posts}/>
              <Sidebar
                  title={sidebar.title}
                  description={sidebar.description}
              />
            </Grid>
          </main>
        </Container>
        <Footer/>
      </div>
  );
}
