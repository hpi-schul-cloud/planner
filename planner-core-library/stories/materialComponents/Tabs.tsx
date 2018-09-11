import React from 'react';
import Paper from '@material-ui/core/Paper';
import createStyles from '@material-ui/core/styles/createStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import withStyles, { WithStyles } from '@material-ui/core/styles/withStyles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const styles = (theme: Theme) =>
  createStyles({
    root: {},
    tabsRoot: {
      borderBottom: '1px solid #e8e8e8'
    },
    tabsIndicator: {
      backgroundColor: 'var(--tab-color)'
    },
    tabRoot: {
      textTransform: 'initial',
      '&:hover': {
        color: '#5e5e5e',
        opacity: 1
      },
      '&$tabSelected': {
        color: '#5e5e5e'
      },
      '&:focus': {
        color: '#5e5e5e'
      }
    },
    tabSelected: {}
  });

interface PropsType extends WithStyles<typeof styles> {
  selected?: string;
  items: {
    id: string;
    text: string;
    color: string;
  }[];
  onChange: (id: string) => void;
}

const CustomTabs: React.SFC<PropsType> = props => {
  const { selected, items, onChange, classes } = props;
  const onClick = (id: string) => {
    if (id !== props.selected) onChange(id);
  };

  return (
    <div className={classes.root}>
      <Tabs
        value={selected}
        indicatorColor="primary"
        textColor="primary"
        onChange={(event, value) => onClick(value)}
        classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
        style={{
          // @ts-ignore tab-color is a css variable
          '--tab-color': `${items.find(item => item.id === selected).color}`
        }}
      >
        {items.map(item => (
          <Tab
            value={item.id}
            label={item.text}
            classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
          />
        ))}
      </Tabs>
    </div>
  );
};

export default withStyles(styles)(CustomTabs);
