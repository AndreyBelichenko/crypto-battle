import * as React  from 'react';
import {  Button } from 'semantic-ui-react';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

import { SetUpdateStoreUserData } from '../../store/redux/actionCreators/actionCreators';

import { ProfileInfo,
  AddPhoto,
  AddPhotoSpan,
  AddPhotoWrapper,
  AddPhotoInput,
  ChageInfoWrapper,
  UserData,
  UserDataButtons,
  Avatar,
  InputName } from './styledComponent';

const Account: React.FC = () => {
  const [isChange, setIsChange] = useState(false);
  const [currentUserData, setCurrentUserData] = useState<any>({});
  const userData = useSelector((state:any) => state.user.userData);
  const dispatch = useDispatch();

  const handleChange = (obj: any) => {
    setCurrentUserData({ ...currentUserData, [obj.name]: obj.value });
  };

  const handleSubmit = () => {
    setIsChange(!isChange);
    const reqObj: any = { id: userData.id, alias: currentUserData.name || userData.name };
    if (currentUserData.avatar) {
      reqObj.avatar = currentUserData.avatar;
    }
    dispatch(SetUpdateStoreUserData( reqObj));
  };

  return (
    <ProfileInfo >
      <ChageInfoWrapper>
        { isChange ? <AddPhotoWrapper className="fileContainer">
          <AddPhoto src="./static/addPhoto.svg"/>
          <AddPhotoSpan>Upload</AddPhotoSpan>
          <AddPhotoInput type="file"
                         name="avatar"
                         accept="image/*"
                         onChange={(e:any) => handleChange({ name: 'avatar', value:e.target.files[0] })}
                         onClick={(e: any) => {
                           e.target.value = null;
                         }}
          />
        </AddPhotoWrapper> : <Avatar src={userData.avatar}/>}
        <UserData>
          <InputName type="text" name="name" defaultValue={userData.name}
                     onChange={(e:any) => handleChange({ name: 'name', value:e.target.value })} size="tiny"
          />
        </UserData>
        <UserDataButtons>
          {isChange ? <Button onClick={handleSubmit} className="ui orange button">Save</Button> :
            <Button onClick={() => setIsChange(!isChange)} className="ui orange button" size="tiny">Change</Button>}
        </UserDataButtons>
      </ChageInfoWrapper>
    </ProfileInfo>
  );
};

export default Account;
