import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import { BtnDiv, Button, Item, Text } from './FavBtn.styled';
import favorites from '../../../img/favorite.svg';
import heart from '../../../img/heartfill.svg';

function FavBtn({ data, id }) {
  const { isAuthenticated } = useAuth0();
  const [click, setClick] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(id) === null) {
      setClick(false);
    } else {
      setClick(true);
    }
  }, [id]);

  const addFavorites = () => {
    window.localStorage.setItem(id, JSON.stringify(data));
  };
  const removeFavorites = () => {
    localStorage.removeItem(id);
  };

  const handleClick = () => {
    if (!click) {
      addFavorites();
    } else {
      removeFavorites();
    }
    setClick(!click);
  };

  return !isAuthenticated ? null : (
    <BtnDiv>
      <Button onClick={() => handleClick()}>
        <Item src={click ? heart : favorites} alt="favorites" />
        <Text>{!click ? 'Add to' : 'Remove from'} Favorites</Text>
      </Button>
    </BtnDiv>
  );
}

export default FavBtn;
