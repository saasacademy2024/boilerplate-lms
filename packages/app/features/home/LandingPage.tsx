import React from 'react';
import { TamaguiProvider, Stack, H1, Paragraph, Button, Image, YStack, XStack, Theme } from 'tamagui';

const LandingPage = () => {
  return (
    <TamaguiProvider>
      <Theme name="light_yellow" style={{ colors: { primary: '#FFC107', background: '#FFFDE7', text: '#333' } }}>
        <Stack flex={1} backgroundColor="#FFFDE7">
          {/* Header */}
          <YStack paddingVertical={20} paddingHorizontal={40} backgroundColor="#FFC107" shadow="small">
            <XStack justifyContent="space-between" alignItems="center">
              <H1 color="#333">SAAS Academy</H1>
              <Button onPress={() => alert('Login')} backgroundColor="#333" color="#FFC107">Login</Button>
            </XStack>
          </YStack>

          {/* Hero Section */}
          <YStack flex={1} justifyContent="center" alignItems="center" padding={40} backgroundColor="#FFE082">
            <H1 fontSize={48} color="#333" textAlign="center">Unlock Your Learning Potential</H1>
            <Paragraph fontSize={18} color="#333" marginTop={10} textAlign="center">
              Join thousands of learners and take your skills to the next level with LearnPortal.
            </Paragraph>
            <Button marginTop={20} paddingHorizontal={30} paddingVertical={15} backgroundColor="#333" color="#FFC107">
              Get Started
            </Button>
          </YStack>

          {/* Features Section */}
          <YStack padding={40}>
            <H1 color="#333">Features</H1>
            <XStack marginTop={20} justifyContent="space-around">
              <YStack width="30%" alignItems="center">
                <Image source={{ uri: 'feature1.png' }} width={100} height={100} />
                <H1 fontSize={24} color="#333">Interactive Courses</H1>
                <Paragraph textAlign="center" color="#555">
                  Access a variety of courses with interactive content to help you learn effectively.
                </Paragraph>
              </YStack>
              <YStack width="30%" alignItems="center">
                <Image source={{ uri: 'feature2.png' }} width={100} height={100} />
                <H1 fontSize={24} color="#333">Expert Instructors</H1>
                <Paragraph textAlign="center" color="#555">
                  Learn from industry experts who are passionate about teaching.
                </Paragraph>
              </YStack>
              <YStack width="30%" alignItems="center">
                <Image source={{ uri: 'feature3.png' }} width={100} height={100} />
                <H1 fontSize={24} color="#333">Flexible Schedule</H1>
                <Paragraph textAlign="center" color="#555">
                  Learn at your own pace and schedule, anytime, anywhere.
                </Paragraph>
              </YStack>
            </XStack>
          </YStack>

          {/* CTA Section */}
          <YStack padding={40} backgroundColor="#FFE082" alignItems="center">
            <H1 color="#333">Join LearnPortal Today</H1>
            <Paragraph fontSize={18} color="#333" marginTop={10} textAlign="center">
              Sign up now and start your learning journey with us.
            </Paragraph>
            <Button marginTop={20} paddingHorizontal={30} paddingVertical={15} backgroundColor="#333" color="#FFC107">
              Sign Up Now
            </Button>
          </YStack>
        </Stack>
      </Theme>
    </TamaguiProvider>
  );
};

export default LandingPage;
