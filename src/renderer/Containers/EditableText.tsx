import React, { useRef, useState } from 'react';
import { RxCross1 } from 'react-icons/rx';

import { useClickAway } from 'renderer/modules/hooks';
import Text from 'renderer/Components/Text';
import Input from 'renderer/Components/Input';
import Flex from 'renderer/Components/Flex';

type EditableTextProps = {
  value: string;
  onChange: (value: string) => void;
};

const EditableText: React.FC<EditableTextProps> = ({ value, onChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(value);
  const ref = useRef<HTMLInputElement>(null);

  useClickAway(ref, () => {
    onChange(newText);
    setIsEditing(false);
  });

  return !isEditing ? (
    <Flex height="30px">
      <Text fontSize="22px" color="#484D59" onClick={() => setIsEditing(true)}>
        {value}
      </Text>
    </Flex>
  ) : (
    <Flex alignItems="center" gap="8px">
      <Input value={newText} onChange={setNewText} ref={ref} />
      <RxCross1 onClick={() => setIsEditing(false)} />
    </Flex>
  );
};

export default EditableText;
