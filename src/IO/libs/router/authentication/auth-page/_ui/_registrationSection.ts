import { IO } from '../../../../../IO';
import { tag } from '../../../../modules/types.io';
import { Form } from './_form';
import { Input } from './_input';
import { Label } from './_label';
import { SubmitButton } from './_submitButton';
import { Title } from './_title';

export function RegistrationSection() {
    const io = new IO(tag.SECTION);
    io.components = [
        () => Title('REGISTRATION'),
        () =>
            Form([
                () => Label('login', [() => Input()]),
                () => Label('password', [() => Input()]),
                () => Label('password*', [() => Input()]),
                () => Label('', [() => SubmitButton('submit')]),
            ]),
    ];
    return io;
}
