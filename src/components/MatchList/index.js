import React, { useState, useEffect } from 'react';
import {
  FlatList, TouchableOpacity, Modal, Linking, Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useStore } from 'react-redux';
import {
  Container, View, Image, Info, Row, Name, About, FabColumn,
  Center, Title, SubTitle, Contacts, Facebook, Whatsapp, Instagram, Twitter,
} from './styles';
import BackButton from '../BackButton';
import CardButton from '../CardButton';
import api from '../../services/api';
import capitalize from '../../utils/capitalize';
import { removeMatch } from '../../store/actions/profile';

export function MatchCard({
  user,
}) {
  const { navigate } = useNavigation();

  const [fullUser, setFullUser] = useState();
  const [visible, setVisible] = useState(false);

  const store = useStore();

  const { jwt } = store.getState().navigation;

  async function getUser() {
    const { data } = await api.get(`/users/${user._id}`);

    setFullUser(data);
  }

  useEffect(() => {
    getUser();
  }, []);

  async function deleteMatch() {
    try {
      store.dispatch(await removeMatch(jwt, user._id));
    } catch (error) {
      Alert.alert('Erro!', capitalize(error.response.data.error.pt_br));
    }
  }

  return (
    <View>
      <Modal visible={visible} transparent animationType="fade">
        <ContactsModal user={user} setVisible={setVisible} />
      </Modal>
      <Image
        source={{ uri: user.images[0] ? user.images[0] : 'http://style.anu.edu.au/_anu/4/images/placeholders/person_8x10.png' }}
        resizeMode="cover"
      />
      <Info>
        <Row>
          <Row>
            <Name>{ user.name.split(' ')[0] }</Name>
          </Row>
          {fullUser ? (
            <TouchableOpacity onPress={() => navigate('TargetUser', {
              user: fullUser,
            })}
            >
              <About />
            </TouchableOpacity>
          ) : null}
        </Row>
      </Info>
      <FabColumn>
        <CardButton
          text="Ver contatos"
          onPressed={() => setVisible(true)}
        />
        <BackButton text="Excluir" onPressed={deleteMatch} />
      </FabColumn>
    </View>
  );
}

export default function MatchList({ matchs }) {
  let index = 0;

  return (
    <Container>
      <FlatList
        horizontal
        data={matchs}
        renderItem={({ item, index: itemIndex }) => (

          <MatchCard
            user={item}
            index={itemIndex}
          />

        )}
        keyExtractor={() => {
          index += 1;

          return String(index);
        }}
        showsHorizontalScrollIndicator={false}
      />

    </Container>
  );
}

export function ContactsModal({ user: match, setVisible }) {
  let children;
  let lenght = 0;

  function openTwitter() {
    Linking.openURL(`https://twitter.com/${match.contacts.twitter.substring(1)}`);
  }

  if (match.contacts.twitter) {
    lenght += 1;
    children = (
      <>
        {children}
        <TouchableOpacity onPress={openTwitter}>
          <Twitter />
        </TouchableOpacity>
      </>
    );
  }

  function openFacebook() {
    Linking.openURL(`https://www.facebook.com/n/?${match.contacts.facebook}`);
  }

  if (match.contacts.facebook) {
    lenght += 1;
    children = (
      <>
        {children}
        <TouchableOpacity onPress={openFacebook}>
          <Facebook />
        </TouchableOpacity>
      </>
    );
  }

  function openInstagram() {
    Linking.openURL(`http://instagram.com/_u/${match.contacts.instagram}`);
  }

  if (match.contacts.instagram) {
    lenght += 1;
    children = (
      <>
        {children}
        <TouchableOpacity onPress={openInstagram}>
          <Instagram />
        </TouchableOpacity>
      </>
    );
  }

  function openWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=${match.contacts.number}`);
  }

  if (match.contacts.number) {
    lenght += 1;
    children = (
      <>
        {children}
        <TouchableOpacity onPress={openWhatsapp}>
          <Whatsapp />
        </TouchableOpacity>
      </>
    );
  }


  return (
    <Center>
      <Title>MATCH!!!</Title>
      <SubTitle>{`Você e ${match.name.split(' ')[0]} desejam um ao outro`}</SubTitle>

      <Contacts>Contatos</Contacts>
      <Row style={{
        width: lenght > 1 ? '50%' : null,
        justifyContent: 'space-around',
        marginBottom: 20,
      }}
      >
        {children}
      </Row>
      <TouchableOpacity onPress={() => setVisible(false)}>
        <BackButton />
      </TouchableOpacity>
    </Center>
  );
}
