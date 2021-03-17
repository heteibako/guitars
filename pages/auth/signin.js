import { providers, signIn } from 'next-auth/client';
import { Wrapper } from '../../components/Wrapper';

export default function SignIn({ providers }) {
  return (
    <div class='container'>
      <Wrapper>
        {Object.values(providers).map((provider) => (
          <div key={provider.name}>
            <button onClick={() => signIn(provider.id)}>Sign in with {provider.name}</button>
          </div>
        ))}
      </Wrapper>
    </div>
  );
}

SignIn.getInitialProps = async () => {
  return {
    providers: await providers(),
  };
};
