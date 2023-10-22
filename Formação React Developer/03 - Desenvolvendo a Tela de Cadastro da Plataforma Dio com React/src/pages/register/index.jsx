import { useForm } from 'react-hook-form';
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';
import { ColumnLeft, ColumnRight, Container, Row, Title, Wrapper } from '../login/styles';
import { SubtitleRegister, Text, TextLink, TitleRegister } from './styles';
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { api } from '../../services/api';
import { useNavigate } from 'react-router-dom';

export const Register = () => {
  
  const navigate = useNavigate();

  const onSubmit = async (formData) =>{
    try{
      const data = {
      name: formData.name,
      email: formData.email,
      password: formData.password
      }
      const resp = await api.post(`/users`,data)

      if(resp.status === 201){
        navigate('/feed') 
        return
      }

      alert('erro ao salvar usário, tente novamente mais tarde!')
    }catch(e){
      alert(e.message)
    }

    
  }
  const { control, handleSubmit, formState: { errors  } } = useForm({
    reValidateMode: 'onChange',
    mode: 'onChange',
});

return(<>
    <Header />
    <Container>
      <ColumnLeft>
        <Title>
        A plataforma para você aprender com experts, dominar as principais tecnologias
        e entrar mais rápido nas empresas mais desejadas.
        </Title>
      </ColumnLeft>
      <ColumnRight>
        <Wrapper>
          <TitleRegister>Comece agora grátis</TitleRegister>
          <SubtitleRegister>crie sua conta e make the change._</SubtitleRegister>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input type="text" placeholder='Nome completo' leftIcon={<MdPerson />} name="name" control={control} />
            <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} />
            {errors.email && <span>E-mail é obrigatório</span>}
            <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="senha" control={control} />
            {errors.senha && <span>Senha é obrigatório</span>}
            <Button title={'Criar minha conta'} variant='secondary' />
          </form>
          <Row>
            <Text>
              Ao clicar em "criar minha conta grátis", declaro que aceito 
              as Políticas de Privacidade e os Termos de Uso da DIO.
            </Text>
          </Row>
          <Row>
            <Text>Já tenho conta. <TextLink href='/login'>Fazer login</TextLink> </Text>
          </Row>
        </Wrapper>
      </ColumnRight>
    </Container>   
  </>
  )
}