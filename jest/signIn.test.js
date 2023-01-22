import React from 'react';
import { render, screen } from '@testing-library/react';
import { SignIn } from '../src/pages/SignIn';

/**
 * @jest-environment jsdom
 */

//テスト前にログイン画面を表示する
// beforEach(() => {
//     render(<SignIn />);
//     //以下でsignIn先のdom一覧が見れる
//     // screen.debug()
// })
describe('ログイン画面の部品存在チェック', () => {
    render(<SignIn />);
    test('inputはあるか', () => {
        const emailInput = screen.getByLabelText("メールアドレス");
        const passwordInput = screen.getByLabelText("パスワード");
        const button = screen.getByRole('button');
        expect(emailInput).toBeVisible();
        expect(passwordInput).toBeVisible();
        expect(button).toBeVisible();
    })
})
