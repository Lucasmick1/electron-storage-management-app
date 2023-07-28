import React, { useRef, useState } from 'react';
import { LiaTimesCircle } from 'react-icons/lia';

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
    <Flex
      height="30px"
      width="336px"
      style={{ padding: '8px 9px', boxSizing: 'border-box' }}
      alignItems="center"
    >
      <Text fontSize="22px" color="#484D59" onClick={() => setIsEditing(true)}>
        {value}
      </Text>
    </Flex>
  ) : (
    <Flex alignItems="center" gap="8px">
      <Input
        autoFocus={isEditing}
        value={newText}
        onChange={setNewText}
        ref={ref}
        fontSize="22px"
        color="#484D59"
        fontWeight="600"
        backgroundColor="#eff0f2;"
      />
      <LiaTimesCircle
        onClick={() => setIsEditing(false)}
        fill="#FF7A00"
        stroke="#FF7A00"
        size="24px"
        cursor="pointer"
      />
    </Flex>
  );
};

export default EditableText;
