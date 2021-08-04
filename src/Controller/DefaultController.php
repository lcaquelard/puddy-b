<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use App\Form\ContactType;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="default")
     */
    public function index()
    {
        return $this->render('default/index.html.twig', [
          'current_page'  => 'index',
          'nav'           => 'index',
        ]);
    }
    /**
     * @Route("/accueil", name="accueil")
     */
    public function accueil()
    {
        return $this->render('default/accueil.html.twig', [
          'current_page'  => 'accueil',
          'nav'           => 'accueil',
        ]);
    }
    /**
     * @Route("/nos_discobus", name="nos_discobus")
     */
    public function nos_discobus()
    {
        return $this->render('default/nos_discobus.html.twig', [
          'current_page'  => 'nos_discobus',
          'nav'           => 'nos_discobus',
        ]);
    }
    /**
     * @Route("/nos_discobus/{n}", name="discobus")
     */
    public function discobus($n)
    {
        return $this->render('default/discobus.html.twig', [
         'current_page' => 'discobus',
         'nav'          => 'nos_discobus',
         'n'            =>  $n,
        ]);
    }
    /**
     * @Route("/formules", name="formules")
     */
    public function formules()
    {
        return $this->render('default/formules.html.twig', [
          'current_page'  => 'formules',
          'nav'           => 'formules',
        ]);
    }
    /**
     * @Route("/services/{n}", name="services")
     */
    public function services($n = 1)
    {
        return $this->render('default/services.html.twig', [
          'current_page'  => 'services',
          'nav'           => 'formules',
          'n'             =>  $n,
        ]);
    }
    /**
     * @Route("/karaoke", name="karaoke")
     */
    public function karaoke()
    {
        return $this->render('default/karaoke.html.twig', [
          'current_page'  => 'karaoke',
          'nav'           => 'karaoke',
        ]);
    }
    /**
     * @Route("/en_clair", name="en_clair")
     */
    public function en_clair()
    {
        return $this->render('default/en_clair.html.twig', [
          'current_page'  => 'en_clair',
          'nav'           => 'en_clair',
        ]);
    }
    /**
     * @Route("/contact", name="contact")
     */
   public function contact(Request $request, \Swift_Mailer $mailer)
    {
      $form = $this->createForm(ContactType::class);
      $form->handleRequest($request);
      if ($form->isSubmitted() && $form->isValid()) {
        $contactFormData = $form->getData();
        $message = (new \Swift_Message('[Puddy-b] Contact de '.$contactFormData['firstname'].' '.$contactFormData['lastname']))
         ->setFrom('puddybparis@gmail.com')
         ->setTo('puddybparis@gmail.com')
         ->setBody(
          'Message reçu  de '.$contactFormData['firstname'].' '.$contactFormData['lastname']."\r\n"
          .'Adresse électronique : '.$contactFormData['from']."\r\n"
          .($contactFormData['company'] != '' ? 'Entreprise : '.$contactFormData['company']."\r\n" : '')
          ."Message :\r\n".$contactFormData['message'],
          'text/plain'
         );
        if ($mailer->send($message)) {
          $this->addFlash('success', 'Message envoyé.');
        } else {
          $this->addFlash('failure', 'Envoi échoué.');
        }
        return $this->redirectToRoute('contact');
      }
      return $this->render('default/contact.html.twig', [
       'current_page' => 'contact',
       'nav'          => 'contact',
       'form' => $form->createView(),
       ]);
    }
    /**
     * @Route("/bottom1", name="bottom1")
     */
    public function bottom1()
    {
      return $this->render('default/bottom1.html.twig', [
        'current_page'  => 'bottom1',
        'nav'           => 'bottom1',
      ]);
    }
    /**
     * @Route("/bottom2", name="bottom2")
     */
    public function bottom2()
    {
      return $this->render('default/bottom2.html.twig', [
        'current_page'  => 'bottom2',
        'nav'           => 'bottom2',
      ]);
    }
    /**
     * @Route("/bottom3", name="bottom3")
     */
    public function bottom3()
    {
      return $this->render('default/bottom3.html.twig', [
        'current_page'  => 'bottom3',
        'nav'           => 'bottom3',
      ]);
    }
    /**
     * @Route("/bottom4", name="bottom4")
     */
    public function bottom4()
    {
      return $this->render('default/bottom4.html.twig', [
        'current_page'  => 'bottom4',
        'nav'           => 'bottom4',
      ]);
    }
    /**
     * @Route("/bottom5", name="bottom5")
     */
    public function bottom5()
    {
      return $this->render('default/bottom5.html.twig', [
        'current_page'  => 'bottom5',
        'nav'           => 'bottom5',
      ]);
    }
    /**
     * @Route("/bottom6", name="bottom6")
     */
    public function bottom6()
    {
      return $this->render('default/bottom6.html.twig', [
        'current_page'  => 'bottom6',
        'nav'           => 'bottom6',
      ]);
    }
}
