import { Container, Grid } from '@mui/material';
import { NeobrutalistWindow } from '../components/NeobrutalistWindow';

export const ProjectsPage: React.FC = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={5} justifyContent={'center'}>
          <Grid>
            <NeobrutalistWindow
              title="muzino"
              content="Frontend app for my gaming platform Zikeeper."
              githubLink="https://github.com/michaeljang94/muzino"
            />
          </Grid>
          <Grid>
            <NeobrutalistWindow
              title="zikeeper"
              content="A gaming platform developed as a side hobby."
              githubLink="https://github.com/michaeljang94/zikeeper"
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
