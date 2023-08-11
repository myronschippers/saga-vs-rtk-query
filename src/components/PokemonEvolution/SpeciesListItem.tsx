import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';

import { SpeciesListItemProps } from './types';
import { capitalizeString } from './utils';

function SpeciesListItem({ name, location }: SpeciesListItemProps) {
  return (
    <ListItem alignItems="flex-start">
      <ListItemAvatar>
        <Avatar>
          <ImageIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={capitalizeString(name)}
        secondary={
          <>
            <Typography
              sx={{ display: 'inline' }}
              component="span"
              variant="body2"
              color="text.primary"
            >
              Location -&nbsp;
            </Typography>
            {location || 'Not Available'}
          </>
        }
      />
    </ListItem>
  );
}

export default SpeciesListItem;
