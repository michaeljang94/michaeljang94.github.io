import './NeobrutalistWindow.css';

import { Button, Card, CardActions, CardContent, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

export interface NeobrutalistWindowProps {
  title: string;
  content: string;
  githubLink: string;
}

export const NeobrutalistWindow: React.FC<NeobrutalistWindowProps> = ({
  title,
  content,
  githubLink,
}) => {
  return (
    <>
      <Card className="neo-card">
        <div className="neo-head">{title}</div>
        <CardContent className="neo-content">
          <Typography className="neo-content">{content}</Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: 'center' }}>
          <Button
            variant="contained"
            className="neo-button"
            startIcon={<GitHubIcon />}
            onClick={() => {
              window.open(new URL(githubLink));
            }}
          >
            GitHub
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
