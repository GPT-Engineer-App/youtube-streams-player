import { useState } from "react";
import { Box, Button, Heading, VStack, HStack, Image, Text, AspectRatio } from "@chakra-ui/react";
import { FaArrowLeft, FaPause } from "react-icons/fa";

const streams = [
  {
    id: 1,
    streamer: "Gamer1",
    title: "Awesome Gameplay",
    thumbnail: "https://images.unsplash.com/photo-1521989116480-519a01ffeb2d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxnYW1pbmclMjB0aHVtYm5haWx8ZW58MHx8fHwxNzEwNDM2MDcwfDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    streamer: "Streamer2",
    title: "Live Q&A",
    thumbnail: "https://images.unsplash.com/photo-1678138091332-432d4a1ac407?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdHJlYW1lciUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTA0MzYwNzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    streamer: "Musician3",
    title: "Live Music Performance",
    thumbnail: "https://images.unsplash.com/photo-1567861911437-538298e4232c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMHRodW1ibmFpbHxlbnwwfHx8fDE3MTA0MzYwNzB8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [selectedStream, setSelectedStream] = useState(null);

  const handleStreamClick = (stream) => {
    setSelectedStream(stream);
  };

  const handleBackClick = () => {
    setSelectedStream(null);
  };

  const handlePauseClick = (duration) => {
    // Simulate pausing the live stream for the specified duration
    console.log(`Pausing stream for ${duration} seconds`);
  };

  return (
    <Box p={4}>
      {selectedStream ? (
        <VStack spacing={4} align="stretch">
          <Button leftIcon={<FaArrowLeft />} onClick={handleBackClick} alignSelf="flex-start">
            Back
          </Button>
          <AspectRatio ratio={16 / 9}>
            <Box bg="gray.200" />
          </AspectRatio>
          <Heading size="lg">{selectedStream.title}</Heading>
          <Text>Streamer: {selectedStream.streamer}</Text>
          <HStack spacing={4}>
            {[1, 2, 3, 4, 5].map((duration) => (
              <Button key={duration} leftIcon={<FaPause />} onClick={() => handlePauseClick(duration)}>
                Pause {duration}s
              </Button>
            ))}
          </HStack>
        </VStack>
      ) : (
        <VStack spacing={4}>
          {streams.map((stream) => (
            <Box key={stream.id} p={4} borderWidth={1} borderRadius="md" cursor="pointer" onClick={() => handleStreamClick(stream)}>
              <HStack spacing={4}>
                <Image src={stream.thumbnail} alt="Stream Thumbnail" boxSize="100px" />
                <VStack align="start" spacing={1}>
                  <Heading size="md">{stream.title}</Heading>
                  <Text>Streamer: {stream.streamer}</Text>
                </VStack>
              </HStack>
            </Box>
          ))}
        </VStack>
      )}
    </Box>
  );
};

export default Index;
